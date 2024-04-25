import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactionTestComponent } from './components/reaction-test/reaction-test.component';

const routes: Routes = [
    { path: '', component: ReactionTestComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ReactionTestRoutingModule { }