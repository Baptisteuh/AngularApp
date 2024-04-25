import { Component, OnInit } from '@angular/core';
import { interval, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-reaction-test',
  templateUrl: './reaction-test.component.html',
  styleUrls: ['./reaction-test.component.scss']
})
export class ReactionTestComponent implements OnInit {

  buttonText!: string;
  hasClicked!: boolean;

  isGreen!: boolean;

  hasFailed!: boolean;

  sub!: Subscription;
  $time = interval(1);

  reactionTime!: number;

  bgColor!: string;
  color!: string;
  shadow!: string;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = 'Click to start !';
    this.hasClicked = false;
    this.isGreen = false;
    this.bgColor = '#aaa';
    this.color = '#555';
    this.shadow = 'lightgray';
  }

  onClick(): void {
    if (!this.hasClicked) {
      this.start();
    } else {
      this.click();
    }
  }

  start(): void {
    this.hasClicked = true;
    this.isGreen = false;
    this.reactionTime = 0;
    this.buttonText = 'Click when the button turns green !'
    this.bgColor = '#aaa';
    this.color = '#555';
    this.shadow = 'lightgray';
    this.sub = this.$time.pipe(
      tap(() => {
        if (Math.random()<0.001) {
          this.isGreen = true;
          this.bgColor = 'lightgreen';
          this.color = 'green';
          this.shadow = 'lightgreen';
        }
        if (this.isGreen) {
          this.reactionTime+=3;
        }
      })
    ).subscribe();
  }

  click(): void {
    this.hasClicked = false;
    if (this.isGreen) {
      this.buttonText = 'Gg ! Your reaction time is : ' + this.reactionTime + ' ms';
      this.hasFailed = false;
    } else {
      this.buttonText = 'Failed ! Too early :(';
      this.bgColor = 'red';
      this.color = 'darkred';
      this.shadow = 'red';
      this.hasFailed = true;
    }
      this.sub.unsubscribe();
  }

}
