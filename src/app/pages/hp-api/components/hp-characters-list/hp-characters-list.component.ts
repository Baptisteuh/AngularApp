import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HpCharacter } from 'src/app/core/models/hp-character.model';
import { HpService } from 'src/app/core/services/hp.service';

@Component({
  selector: 'app-hp-characters-list',
  templateUrl: './hp-characters-list.component.html',
  styleUrls: ['./hp-characters-list.component.scss']
})
export class HpCharactersListComponent implements OnInit {

  hpCharacters$!: Observable<HpCharacter[]>;

  search!: string;

  constructor(private service: HpService) { }

  ngOnInit(): void {
    this.hpCharacters$ = this.service.getAllCharacters();
  }

}
