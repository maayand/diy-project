import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DiysRoutingModule } from './diys-routing.module';
import { DiyComponent } from './diy.component';
import { DiyListComponent } from './diy-list/diy-list.component';
import { DiyEditComponent } from './diy-edit/diy-edit.component';
import { DiyDetailComponent } from './diy-detail/diy-detail.component';
import { DiyItemComponent } from './diy-list/diy-item/diy-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        DiyComponent, 
        DiyListComponent,
        DiyEditComponent,
        DiyDetailComponent,
        DiyItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DiysRoutingModule,
        SharedModule
    ]
})
export class DiysModule{

}