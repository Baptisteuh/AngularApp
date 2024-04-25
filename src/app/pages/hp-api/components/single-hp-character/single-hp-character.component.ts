import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HpCharacter } from 'src/app/core/models/hp-character.model';
import { HpService } from 'src/app/core/services/hp.service';

@Component({
  selector: 'app-single-hp-character',
  templateUrl: './single-hp-character.component.html',
  styleUrls: ['./single-hp-character.component.scss']
})
export class SingleHpCharacterComponent implements OnInit {

  hpCharacters$!: Observable<HpCharacter[]>;
  name!: string;
  actor!: string;

  constructor(private service: HpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.actor = this.route.snapshot.params['name'];
    this.name = this.name.split("&")[0];
    this.actor = this.actor.split("&")[1];
    this.hpCharacters$ = this.service.getAllCharacters();
  }
}
