import { trigger, state, transition, animate, style } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from '../../../../core/models/photos.models';
import { PhotosService } from '../../../../core/services/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-out'))
    ])
  ]
})
export class PhotoComponent implements OnInit {
  @Input() photo!: Photo;
  state: string = 'default';

  constructor(private router: Router, private service: PhotosService) { }

  ngOnInit(): void {
  }

  onViewPhoto(): void {
    this.router.navigateByUrl(`photos/${this.photo.id}`);
  }

  onDeletePhoto(): void {
    this.service.deletePhotoById(this.photo.id);
    this.reloadComponent();
  }

  reloadComponent() {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => { this.router.navigate(['photos']); });
  }

  onRotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
}
