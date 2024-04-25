import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  categories = [
    'Versions',
    'Bug list',
    'Futures Updates',
    'Player history'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
