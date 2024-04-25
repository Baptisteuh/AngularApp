import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HpCharactersListComponent } from './components/hp-characters-list/hp-characters-list.component';
import { HpLandingPageComponent } from './components/hp-landing-page/hp-landing-page.component';
import { RouterModule } from '@angular/router';
import { HpCharacterComponent } from './components/hp-character/hp-character.component';
import { SingleHpCharacterComponent } from './components/single-hp-character/single-hp-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HpCharactersListComponent,
    HpLandingPageComponent,
    HpCharacterComponent,
    SingleHpCharacterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HpCharactersListComponent,
    HpLandingPageComponent,
    HpCharacterComponent,
    SingleHpCharacterComponent
  ]
})
export class HpApiModule { }
