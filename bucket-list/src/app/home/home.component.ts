import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // can reference this animation in div as [@goals]="goals.length" property
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        // when something enters the DOM
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

        // when something leaves the DOM
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true})

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number; // allows you to surface value to ui in home.component.html
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal'; // use ngModel to do two way data binding, can be referenced as
                                          // [(ngModel)]="goalText" in html. then can change dynamically with {{goalText}}

  goals = []; // use *ngFor to iterate through items in array, *ngFor="let goal of goals"

  constructor(private _data: DataService) { }

  // lifecycle hook, when component runs
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
    if (this.goalText) {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
      this._data.changeGoal(this.goals);
    }
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }
}
