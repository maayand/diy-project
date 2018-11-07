import { NgModule } from '@angular/core';
import { Routes , RouterModule, PreloadAllModules } from '@angular/router';

import { MaterialsListComponent } from './materials-list/materials-list.component';

const appRouter : Routes = [
    { path : '', redirectTo: '/diys', pathMatch: 'full'},
    { path: 'diys', loadChildren: './diy/diys.module#DiysModule'},
    { path: 'material-list',component: MaterialsListComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRouter, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutinModule{

}