import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2TableModule } from 'ng2-table/ng2-table';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { routing } from  './app.routing';
import { SearchFormComponent } from './first/search-form/search-form.component';
import { ResultTableComponent } from './first/result-table/result-table.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SearchFormComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing,
    Ng2TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
