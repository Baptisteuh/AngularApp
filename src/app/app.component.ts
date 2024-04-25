import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  buttonText!: string;
  theme!: string;

  previousUrls!: string[];
  currentUrl!: string;
  isBack!: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buttonText = "☀️";
    this.theme = "dark";
    this.previousUrls = [];
    this.isBack = false;

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (!this.isBack) {
        this.previousUrls[this.previousUrls.length] = this.currentUrl;
        this.currentUrl = this.router.url;
      } else {
        this.isBack = false;
      }
    })
  }

  onSwitchApparence(): void {
    if (this.theme == "light") {
      this.theme = "dark";
      this.buttonText = "☀️";
    } else {
      this.theme = "light";
      this.buttonText = "🌙";
    }
  }

  onBack(): void {
    if (this.previousUrls.length>1) {
      this.isBack = true;
      this.router.navigateByUrl(this.previousUrls[this.previousUrls.length-1]);
      this.previousUrls.pop();
    }
  }
}
