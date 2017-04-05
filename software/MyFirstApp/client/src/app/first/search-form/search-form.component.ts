import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';


@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input()
  user : Object;
  @Output()
  submitForm = new EventEmitter<Object>();
  @Output()
  reset = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }
  submitFormUser() {
    this.submitForm.emit(this.user);
  }
  resetForm() {
    this.reset.emit(this.user);
  }


}
