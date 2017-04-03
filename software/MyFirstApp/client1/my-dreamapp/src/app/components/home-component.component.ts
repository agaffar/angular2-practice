/**
 * Created by SB004 on 4/3/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home-component.html')
})
export class HomeComponent {
    title: string = 'Home Page';
    body:  string = 'This is the about home body';
    imageLink : string = 'http://lorempixel.com/400/200'
    constructor() { }
    runClick(){
        console.log("clicked the home component button");
    }


}
