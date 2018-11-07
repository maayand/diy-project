import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterPipe } from './filter.pipe';

import { DropdownDirective } from './dropdown.directive';

@NgModule({
    declarations: [
        DropdownDirective,
        FilterPipe
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        FilterPipe,
        FormsModule
    ]
})

export class SharedModule{

}