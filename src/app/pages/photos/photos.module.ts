import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SinglePhotoComponent } from './components/single-photo/single-photo.component';
import { NewPhotoComponent } from './components/new-photo/new-photo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotosRoutingModule } from './photos-routing.module';



@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    SinglePhotoComponent,
    NewPhotoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PhotosRoutingModule
  ],
  exports: [
    PhotoComponent,
    PhotoListComponent,
    NewPhotoComponent,
    SinglePhotoComponent
  ]
})
export class PhotosModule { }
