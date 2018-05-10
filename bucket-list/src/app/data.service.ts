import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// this is how to share data between components
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'another life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
