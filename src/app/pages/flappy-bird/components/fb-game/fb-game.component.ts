import { Component, HostListener, OnInit } from '@angular/core';
import { interval, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-fb-game',
  templateUrl: './fb-game.component.html',
  styleUrls: ['./fb-game.component.scss']
})
export class FbGameComponent implements OnInit {

  isRunning!: boolean;
  canStart!: boolean;
  isDead!: boolean;
  height!: number;
  heightPipe!: number;
  pipeTravel!: number;
  score!: number;
  upPipeHeight!: number
  downPipeHeight!: number
  pipeLeft!: number;
  $downHeight = interval(4);
  subscriptionHeight!: Subscription;
  $movePipes = interval(4);
  subscriptionPipes!: Subscription;
  $start = interval(2000);
  subscriptionStart!: Subscription;
  $jump = interval(100);
  subscriptionJump!: Subscription;
  $die = interval(4);
  subscriptionDie!: Subscription;

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case " ":
        this.onClick();
        break;
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.isRunning = false;
    this.canStart = true;
    this.height = 50;
    this.heightPipe = 0;
    this.pipeTravel = 0;
    this.score = 0;
    this.downPipeHeight = 20 - this.heightPipe + 9.25;
    this.upPipeHeight = 39.25 - this.downPipeHeight;
    this.pipeLeft = 62;
    this.isDead = false;
  }

  onClick(): void {
    if (this.isDead && this.canStart) {
      this.ngOnInit();
    } else {
      if (this.isRunning) {
        this.jump()
      } else {
        this.run();
      }
    }
  }

  run(): void {
    if (this.canStart) {
      this.isRunning = true;
      this.canStart = false;
      this.height = 50;
      this.heightPipe = 0;
      this.pipeTravel = 0;
      this.score = 0;
      this.downPipeHeight = 20 - this.heightPipe + 9.25;
      this.upPipeHeight = 39.25 - this.downPipeHeight;
      this.pipeLeft = 62;
      this.isDead = false;
      this.fall();
      this.pipes();
    }
  }

  jump(): void {
    this.subscriptionHeight.unsubscribe();
    this.height -= 7;
    document.getElementById('bird')?.animate([
      { transform: 'translateY(75px)' },
      { transform: 'rotate(-45deg)' }
    ],
      { duration: 175 }
    )
    this.subscriptionJump = this.$jump.pipe(
      tap(() => {
        this.fall();
        this.subscriptionJump.unsubscribe();
      })
    ).subscribe();
  }

  fall(): void {
    this.subscriptionHeight = this.$downHeight.pipe(
      tap(nb => {
        this.height += nb / 400;
        this.checkState();
      })
    ).subscribe();
  }

  pipes(): void {
    this.subscriptionPipes = this.$movePipes.pipe(
      tap(() => {
        this.pipeTravel++;
        this.pipeLeft = this.pipeLeft - 0.0905;
        this.movePipes();
      })
    ).subscribe();
  }

  movePipes(): void {
    if (this.pipeTravel == 500) {
      this.heightPipe = Math.floor(Math.random() * (22 - (-5) + 1) + (-5));
      this.pipeTravel = 0;
      this.downPipeHeight = 20 - this.heightPipe + 9.25;
      this.upPipeHeight = 39.25 - this.downPipeHeight;
      this.pipeLeft = 62;
    } else if (this.pipeTravel == 400) {
      this.score++;
    }
  }

  checkState(): void {
    if (this.height > 88 || this.height < 20) {
      this.die();
    }
    if ((this.height > this.heightPipe + 60 || this.height < this.heightPipe + 35) && this.pipeTravel >= 340 && this.pipeTravel <= 400) {
      this.die();
    }
  }

  die(): void {
    this.isRunning = false;
    this.isDead = true;
    document.getElementById('bird')?.animate([
      { transform: 'rotate(60deg)' }
    ],
      { duration: 500 }
    )
    this.subscriptionDie = this.$die.pipe(
      tap(nb => {
        if (this.height < 88) {
          this.height += nb / 400;
        } else {
          this.subscriptionDie.unsubscribe();
        }
      })
    ).subscribe();
    this.subscriptionHeight.unsubscribe();
    this.subscriptionPipes.unsubscribe();
    this.subscriptionStart = this.$start.pipe(
      tap(() => {
        this.canStart = true;
        this.subscriptionStart.unsubscribe();
      })
    ).subscribe();
  }

}
