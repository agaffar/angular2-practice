import { Component, OnInit } from '@angular/core';
import {QueryApi} from "../common/request/QueryApi";
import {FirstService} from "./first.service";
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [FirstService, QueryApi]
})
export class FirstComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  imageLink : string = 'http://lorempixel.com/400/200'
  private user = {};
  private tableData = [];
  paginationObject : any;
  constructor(private FirstService:FirstService,private QueryApi : QueryApi) {


  }
  submitForm(){
    console.log(this.user);
    let pagination = {
      numberToSkip : 0,
      limito : 3,
      sortingCriteria : {}};
    let query = {
      "pagination" : pagination,
      "user" : this.user
    };


    this.FirstService.getSearchedData(query).subscribe((response) => {
        if (response.status === "ok") {
          // this.router.navigate(['staff']);
          console.log(response.data);
          this.paginationObject = {
            "pagination" : pagination,
             "total" : response.pagination.total
          }
          //this.tableData = this.modularized(response.data);
          this.setTableData(this.modularized(response.data))
          console.log(this.tableData);
        }
      },
      (error) => {
        console.log('Error in deleting staff');
      }
    );
  }
  modularized(dataReceived){
  let data = [];
  for(let eachUser of dataReceived){
    let addresses = [];
    for(let eachData of eachUser.data){
      addresses.push(eachData.addr);
    }
    let users = {
     "firstName" : eachUser.users.firstName,
    "lastName" : eachUser.users.lastName,
    "dateOfBirth" : eachUser.users.dateOfBirth,
    "addresses" : addresses
    };
    data.push(users);
  };
  return data;
  }
  reset(){
    this.user = {};
  }
  runClick(){
    alert("clicked the home component button");
    console.log("clicked the home component button");
  }
  ngOnInit() {
  }
  setTableData(data) {
    this.tableData = data;
  }

}

