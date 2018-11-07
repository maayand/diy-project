import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiyComponent } from './diy.component';
import { DiyListComponent } from './diy-list/diy-list.component'
import { DiyEditComponent } from './diy-edit/diy-edit.component';
import { DiyDetailComponent } from './diy-detail/diy-detail.component';

const diysRoutes: Routes = [
    { path: '', component: DiyComponent, children:[
        { path: '', component: DiyListComponent },
        { path: 'new', component: DiyEditComponent },
        { path: ':id' , component: DiyDetailComponent },
        { path: ':id/edit', component: DiyEditComponent }
    ] },
];
@NgModule({
    imports: [
        RouterModule.forChild(diysRoutes)
    ],
    exports: [RouterModule]
})

export class DiysRoutingModule{

}