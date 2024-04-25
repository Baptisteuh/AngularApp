import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FbGameComponent } from './components/fb-game/fb-game.component';

const routes: Routes = [
    { path: '', component: FbGameComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FlappyBirdRoutingModule { }