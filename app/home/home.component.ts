import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title: string = 'Hello';
  body:  string = 'This is the home page';
  question: string;
  answer : string;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
  //  this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {

    console.log('sdfsdf');
    console.log(m);    

    if (m == 'Hello'){
      this.answer = "Hello. Pleas ask me";
    }
    else if (m == 'x'){
      this.answer = "x?";
    } 
    else if (m == 'I\'d like to find information about paying rates, please!'){
      this.answer = "Sure, here is the link you're after: http://govt.org.au/rates";
    } 
    else{
      this.answer = "I can't understand you or please ask normal";
    }  

  }
}
