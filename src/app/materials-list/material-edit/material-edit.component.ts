import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Material } from '../../shared/material.model';
import {  MaterialListService } from '../material-list.service';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') materialListForm: NgForm;  
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Material;
  
  constructor(private materialService: MaterialListService) { }

  ngOnInit() {
    this.subscription = this.materialService.startedEditing
      .subscribe(
        (index: number)=>{
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.materialService.getMaterial(index);
          this.materialListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }
  onSubmit(from : NgForm){
    const value = from.value;
    const newMaterial = new Material(value.name, value.amount);
    if(this.editMode){
      this.materialService.updateMaterial(this.editedItemIndex, newMaterial);
    } else{
      this.materialService.addMaterial(newMaterial);
    }
    this.editMode = false;
    from.reset();
  }
  onClear(){
    this.materialListForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.materialService.deleteMaterial(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
