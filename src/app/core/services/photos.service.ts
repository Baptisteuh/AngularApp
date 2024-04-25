import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { Photo } from "../models/photos.models";

@Injectable({
    providedIn: 'root'
})
export class PhotosService {

    constructor(private http: HttpClient) { }

    getAllPhotos(): Observable<Photo[]> {
        return this.http.get<Photo[]>('http://localhost:3000/photos');
    }

    getPhotoById(idPhoto: number): Observable<Photo> {
        const photo = this.http.get<Photo>(`http://localhost:3000/photos/${idPhoto}`);
        if (!photo) {
            throw new Error('Photo not found !');
        } else {
            return photo;
        }
    }

    likePhotoById(idPhoto: number, likeType: boolean): Observable<Photo> {
        return this.getPhotoById(idPhoto).pipe(
            map(photo => ({
                ...photo,
                likes: photo.likes + (likeType ? 1 : -1),
                hasClicked: likeType
            })),
            switchMap(updatedPhoto => this.http.put<Photo>(
                `http://localhost:3000/photos/${idPhoto}`,
                updatedPhoto)
            )
        );
    }

    addPhoto(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<Photo> {
        if (!!this.getAllPhotos()) {
            return this.getAllPhotos().pipe(
                map(() => ({
                    ...formValue,
                    likes: 0,
                    creationDate: new Date(),
                    id: 0
                })),
                switchMap(newPhoto => this.http.post<Photo>(
                    `http://localhost:3000/photos`,
                    newPhoto)
                )
            );
        } else {
            return this.getAllPhotos().pipe(
                map(photos => [...photos].sort((a, b) => a.id - b.id)),
                map(sortedPhotos => sortedPhotos[sortedPhotos.length - 1]),
                map(previousPhoto => ({
                    ...formValue,
                    likes: 0,
                    creationDate: new Date(),
                    id: previousPhoto.id + 1
                })),
                switchMap(newPhoto => this.http.post<Photo>(
                    `http://localhost:3000/photos`,
                    newPhoto)
                )
            )
        }
    }

    deletePhotoById(idPhoto: number): void {
        this.http.delete<Photo>(`http://localhost:3000/photos/${idPhoto}`).subscribe();
    }
}