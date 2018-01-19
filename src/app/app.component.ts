import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() exchange;

  constructor(){}
  
  dataDetails(data){
  	this.exchange=data;
  }
}
