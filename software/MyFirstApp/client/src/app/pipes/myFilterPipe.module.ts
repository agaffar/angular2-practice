/**
 * Created by SB004 on 4/6/2017.
 */
import {NgModule} from '@angular/core';
import {MyFilter} from './myfilter.pipe'
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
@NgModule({
  declarations : [
    MyFilter
  ],
  imports : [BrowserModule, HttpModule, FormsModule],
  exports : [MyFilter]
})
export class MyFilterPipeModule{

}
