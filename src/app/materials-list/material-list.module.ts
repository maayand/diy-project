import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MaterialsListComponent  } from './materials-list.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        MaterialsListComponent,
        MaterialEditComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})

export class MaterialListModule{

}