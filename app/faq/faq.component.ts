import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'about',
  template: require('./faq.component.html')
})
export class Faq implements OnInit{
  title: string = 'FAQ Page';
  body:  string = 'This is the Frequently Asked Questions page body';

  constructor(public _stateService: StateService) { }

  ngOnInit() {
   
  }


}
