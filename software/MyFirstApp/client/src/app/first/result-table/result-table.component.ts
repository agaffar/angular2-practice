import { Component, OnInit,EventEmitter,Input,Output,Pipe,PipeTransform } from '@angular/core';
import {MyFilter} from '../../pipes/myfilter.pipe';
import * as _ from 'lodash';
@Component({
  selector: 'result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  @Input()
  resultTableData : any;
  filter = {}
  ascOrder = true;
  @Input()
  pagination : any;
  constructor(){
  }

  ngOnInit() {
 /*   this.resultTableData = this.sortByKey(this.resultTableData,"firstName",this.ascOrder);*/
  }
  filterTable(){
    console.log(this.filter);
  }
  sorting(str){
    this.ascOrder =!this.ascOrder;
    let orderBy = 'asc';
    if(this.ascOrder == true)
      orderBy = 'asc';
    else
      orderBy = 'desc';

      this.resultTableData = _.orderBy(this.resultTableData , [str], [orderBy]);

  }
  sortByKey(array, key,ascOrder) {
  return array.sort(function(a, b) {
    var x = a[key]; var y = b[key];
    if(ascOrder == true)
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    else
      return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  });
}
  onChangeTable(){

  }
}
