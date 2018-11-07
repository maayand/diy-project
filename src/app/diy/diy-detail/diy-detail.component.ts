import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Diy } from '../diy.model';
import { Material } from '../../shared/material.model';
import { MaterialListService } from '../../materials-list/material-list.service';
import { DiyService } from '../diy.service';

@Component({
  selector: 'app-diy-detail',
  templateUrl: './diy-detail.component.html',
  styleUrls: ['./diy-detail.component.css']
})

export class DiyDetailComponent implements OnInit {
  diyProject: Diy;
  id: number;
  isSendToMaterialList = false;
  constructor(private MaterialSerivce: MaterialListService,
              private route: ActivatedRoute,
              private router : Router,
              private diyService: DiyService ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params:Params)=>{
          this.id = +params['id'];
          this.diyProject = this.diyService.getSingleDiy(this.id);
        }
      );
  }

  onSendToMatrialList(){
    this.isSendToMaterialList = true;
    const newMaterials = [];
    for (let material of this.diyProject.materials) {
      newMaterials.push(new Material(material.name, material.amount));
    }
    this.MaterialSerivce.addMaterials(newMaterials);
    setTimeout( () => { 
                  this.isSendToMaterialList=false; 
                }, 2000);
  }
  onEditDiy(){
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteDiy(){
    this.diyService.deleteDiy(this.id);
    this.router.navigate(['/diys']);
  }

}
