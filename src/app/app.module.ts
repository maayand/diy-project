import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutinModule } from './app-routing.module';
import { MaterialListModule } from './materials-list/material-list.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialListModule,
    SharedModule,
    CoreModule,
    AppRoutinModule,      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
