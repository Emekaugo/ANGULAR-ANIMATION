import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-angular-animation',
  templateUrl: './angular-animation.component.html',
  styleUrls: ['./angular-animation.component.scss'],

  animations: [
    trigger('changeBtnColor', [
      state(
        'state1',
        style({
          backgroundColor: 'yellow',
        })
      ),
      state(
        'state2',
        style({
          backgroundColor: 'pink',
          border: '1px solid #18ab29',
          height: '100px',
          width: '200px',
        })
      ),
      transition('state1=>state2', animate('1000ms')),
      transition('state2=>state1', animate('1000ms')),
    ]),

    trigger('AnimateList', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
        animate('0.2s 600ms ease-in'),
      ]),

      transition(':leave', [
        animate('1.2s ease-out'),
        style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
      ]),
    ]),
  ],
})
export class AngularAnimationComponent implements OnInit {
  title = 'Animations in Angular';
  current = 'state1';
  mylist!: string[];

  constructor() {}

  ngOnInit(): void {}

  changeState() {
    this.current = this.current === 'state1' ? 'state2' : 'state1';
  }

  addElement() {
    this.mylist.push('This list is animated');
  }

  removeElement() {
    this.mylist.length -= 1;
    for (let i = 0; i < this.mylist.length; i++) {
      this.mylist.length -= 1;
      console.log('array value', this.mylist[i]);
    }
  }
}
