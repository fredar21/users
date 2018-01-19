import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mama= "mama donde estan los juguetes";
  @Output() objeto = new EventEmitter();

  constructor(){}
  
  daticos(valor){
  	this.objeto=valor;
  	//console.log(this.objeto);
  	//this.objeto.emit(valor);
  }
}
