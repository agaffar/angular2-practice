import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  imageLink : string = 'http://lorempixel.com/400/200'
  constructor() {

  }
  runClick(){
    alert("clicked the home component button");
    console.log("clicked the home component button");
  }
  ngOnInit() {
  }

}

