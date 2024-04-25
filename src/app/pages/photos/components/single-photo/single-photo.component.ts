import { trigger, state, transition, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Photo } from '../../../../core/models/photos.models';
import { PhotosService } from '../../../../core/services/photos.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-out'))
    ])
  ]
})
export class SinglePhotoComponent implements OnInit {

  photo!: Photo;
  hasClicked!: boolean;
  buttonText!: string;
  photo$!: Observable<Photo>;
  state: string = 'default';

  constructor(private photosService: PhotosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const idPhoto = +this.route.snapshot.params['id'];
    this.photo$ = this.photosService.getPhotoById(idPhoto).pipe(
      tap(photo => {
        this.hasClicked = photo.hasClicked;
        if (this.hasClicked) {
          this.buttonText = '🍍';
        } else {
          this.buttonText = '🍎';
        }
      })
    );
  }

  onLike(idPhoto: number): void {
    if (!this.hasClicked) {
      this.hasClicked = true;
      this.photo$ = this.photosService.likePhotoById(idPhoto, this.hasClicked).pipe(
        tap(() => this.buttonText = '🍍')
      );
    } else {
      this.hasClicked = false;
      this.photo$ = this.photosService.likePhotoById(idPhoto, this.hasClicked).pipe(
        tap(() => this.buttonText = '🍎')
      );
    }
  }

  onBack(): void {
    this.router.navigateByUrl('photos');
  }

  onRotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

}