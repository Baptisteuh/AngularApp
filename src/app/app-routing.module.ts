import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { LandingPageComponent } from "./pages/landing-page/components/landing-page/landing-page.component";
import { SkinFounderComponent } from "./pages/skin-founder/components/skin-founder/skin-founder.component";

const routes: Routes = [
    {
        path: 'photos', loadChildren: () => import('./pages/photos/photos.module').then(m => m.PhotosModule), canActivate: [AuthGuard] 
    },
    {
        path: '', component: LandingPageComponent, canActivate: [AuthGuard] 
    },
    {
        path: 'skinFounder', component: SkinFounderComponent, canActivate: [AuthGuard] 
    },
    {
        path: 'employees', loadChildren: () => import('./pages/employees/employees.module').then(m => m.EmployeesModule), canActivate: [AuthGuard] 
    },
    {
        path: 'hp', loadChildren: () => import('./pages/hp-api/hp-routing.module').then(m => m.HpRoutingModule), canActivate: [AuthGuard] 
    },
    {
        path: 'fb', loadChildren: () => import('./pages/flappy-bird/flappy-bird-routing.module').then(m => m.FlappyBirdRoutingModule), canActivate: [AuthGuard] 
    },
    {
        path: 'reactionTest', loadChildren: () => import('./pages/reaction-test/reaction-test-routing.module').then(m => m.ReactionTestRoutingModule), canActivate: [AuthGuard] 
    },
    {
        path: 'projectGestion', loadChildren: () => import('./pages/gestion-projet/gestion-projet-routing.module').then(m => m.GestionProjetRoutingModule)/*, canActivate: [AuthGuard] */
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}