import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4; // allows you to surface value to ui in home.component.html
  btnText: string = 'Add an item'
  goalText: string = 'My first life goal' // use ngModel to do two way data binding, can be referenced as
                                          // [(ngModel)]="goalText" in html. then can change dynamically with {{goalText}}

  constructor() { }

  ngOnInit() {
  }

}
