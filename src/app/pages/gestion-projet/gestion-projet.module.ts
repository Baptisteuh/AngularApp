import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionProjetRoutingModule } from './gestion-projet-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    GestionProjetRoutingModule,
    CoreModule,
    MatGridListModule
  ]
})
export class GestionProjetModule { }
