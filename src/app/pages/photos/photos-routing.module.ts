import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { NewPhotoComponent } from './components/new-photo/new-photo.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SinglePhotoComponent } from './components/single-photo/single-photo.component';

const routes: Routes = [
    { path: '', component: PhotoListComponent, canActivate: [AuthGuard] },
    { path: 'create', component: NewPhotoComponent, canActivate: [AuthGuard] },
    { path: ':id', component: SinglePhotoComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PhotosRoutingModule { }