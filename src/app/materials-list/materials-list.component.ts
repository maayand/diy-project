import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Material } from '../shared/material.model';
import { MaterialListService } from './material-list.service';

@Component({
  selector: 'app-materials-list',
  templateUrl: './materials-list.component.html',
  styleUrls: ['./materials-list.component.css']
})
export class MaterialsListComponent implements OnInit {
  
  materials:  Material[];
  subscription: Subscription;
  filteredCategory='';
  constructor( private materialService: MaterialListService) { }

  ngOnInit() {
    this.materials = this.materialService.getMaterials();
    this.subscription = this.materialService.materialChanged
    .subscribe(
      (materials: Material[])=>{
        this.materials = materials;
      }
    );
  }

  onEditMaterialItem(index: number){
    this.materialService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
