import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbGameComponent } from './components/fb-game/fb-game.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FbGameComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FbGameComponent
  ]
})
export class FlappyBirdModule { }
