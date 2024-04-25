import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkinFounderComponent } from './components/skin-founder/skin-founder.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SkinFounderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SkinFounderComponent
  ]
})
export class SkinFounderModule { }
