import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HpCharacter } from 'src/app/core/models/hp-character.model';

@Component({
  selector: 'app-hp-character',
  templateUrl: './hp-character.component.html',
  styleUrls: ['./hp-character.component.scss']
})
export class HpCharacterComponent implements OnInit {

  @Input() hpCharacter!: HpCharacter;
  @Input() regex!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onView(): void {
    this.router.navigateByUrl(`hp/characters/${this.hpCharacter.name}&${this.hpCharacter.actor}`);
  }

}
