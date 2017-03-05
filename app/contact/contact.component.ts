import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'about',
  template: require('./contact.component.html')
})
export class Contact implements OnInit{
  title: string = 'Contact Page';
  body:  string = 'This is the contact page body';
  message: string;

  constructor(public _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
