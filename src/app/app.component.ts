import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(){

  }

  currentAction : any;

  setCurrentAction(action : any){
    this.currentAction = action;
  }

}
