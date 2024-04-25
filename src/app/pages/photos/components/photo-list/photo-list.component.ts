import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../../../core/models/photos.models';
import { PhotosService } from '../../../../core/services/photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos$!: Observable<Photo[]>;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photos$ = this.photosService.getAllPhotos();
  }

}
