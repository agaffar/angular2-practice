/**
 * Created by SB004 on 4/4/2017.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {MyAppRoutes} from '../app.routes'
import { AppComponent } from '../app.component.ts';
import {HomeComponent} from "./home-component.component.ts";

@NgModule({
  declarations: [
    HomeComponent

  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],

  bootstrap: [HomeComponent]
})
export class HomeModule { }
