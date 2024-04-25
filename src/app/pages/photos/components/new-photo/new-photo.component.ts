import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Photo } from 'src/app/core/models/photos.models';
import { PhotosService } from 'src/app/core/services/photos.service';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.scss']
})
export class NewPhotoComponent implements OnInit {

  photoForm!: FormGroup;
  photoPreview$!: Observable<Photo>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder, private router: Router, private photosService: PhotosService) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.photoForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    });

    this.photoPreview$ = this.photoForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        creationDate: new Date(),
        likes: 0,
        id: -1
      }))
    );
  }

  onSubmitForm() {
    this.photosService.addPhoto(this.photoForm.value).pipe(
      tap(() => this.router.navigateByUrl('/photos'))
    ).subscribe();
  }

}
