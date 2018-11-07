import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { DiyService } from '../diy.service';

@Component({
  selector: 'app-diy-edit',
  templateUrl: './diy-edit.component.html',
  styleUrls: ['./diy-edit.component.css']
})

export class DiyEditComponent implements OnInit {
  id:number;
  editMode = false;
  diyProjectForm: FormGroup;

  constructor( private route: ActivatedRoute,
               private diyService: DiyService,
               private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params)=>{
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit(){
    if(this.editMode){
      this.diyService.updateDiy(this.id, this.diyProjectForm.value)
    }
    else{
      this.diyService.addDiyProject(this.diyProjectForm.value);
    }
    this.onCancel()
  }

  onAddMaterial(){
    (<FormArray>this.diyProjectForm.get('materials')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onDeleteMaterial(index:number){
    (<FormArray>this.diyProjectForm.get('materials')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  getControls(){
    return(<FormArray>this.diyProjectForm.get('materials')).controls;
  }

  private initForm(){
    let diyName ='';
    let diyImagePath = '';
    let diyDescription = '';
    let diyInstructions = '';
    let diyMaterials = new FormArray([]);

    if(this.editMode){
      const diyProject = this.diyService.getSingleDiy(this.id);
      diyName = diyProject.name;
      diyImagePath = diyProject.imgPath;
      diyDescription = diyProject.description;
      diyInstructions = diyProject.instructions;

      if(diyProject['materials']){
        for (let material of diyProject.materials){
          diyMaterials.push(
            new FormGroup({
              'name': new FormControl(material.name, Validators.required),
              'amount': new FormControl(material.amount, [
                Validators.required, 
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.diyProjectForm = new FormGroup({
      name: new FormControl(diyName, Validators.required),
      imgPath: new FormControl(diyImagePath, Validators.required),
      description: new FormControl(diyDescription, Validators.required),
      materials: diyMaterials,
      instructions: new FormControl(diyInstructions, Validators.required),
    })
  }
  

}
