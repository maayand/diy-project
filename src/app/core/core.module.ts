import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutinModule } from '../app-routing.module';

import { MaterialListService } from '../materials-list/material-list.service';
import { DiyService } from '../diy/diy.service';
import { DataStorageService } from '../shared/data-storage.service';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        SharedModule,
        AppRoutinModule
    ],
    exports: [
        AppRoutinModule,
        HeaderComponent,
    ],
    providers: [
        MaterialListService, 
        DiyService, 
        DataStorageService
    ]
})
export class CoreModule{

}