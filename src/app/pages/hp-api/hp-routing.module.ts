import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HpCharactersListComponent } from './components/hp-characters-list/hp-characters-list.component';
import { HpLandingPageComponent } from './components/hp-landing-page/hp-landing-page.component';
import { SingleHpCharacterComponent } from './components/single-hp-character/single-hp-character.component';

const routes: Routes = [
    { path: '', component: HpLandingPageComponent},
    { path: 'characters/:name', component: SingleHpCharacterComponent},
    { path: 'characters', component: HpCharactersListComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HpRoutingModule { }