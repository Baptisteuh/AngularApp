import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkinFounderModule } from './pages/skin-founder/skin-founder.module';
import { EmployeesModule } from './pages/employees/employees.module';
import { HpApiModule } from './pages/hp-api/hp-api.module';
import { FlappyBirdModule } from './pages/flappy-bird/flappy-bird.module';
import { ReactionTestModule } from './pages/reaction-test/reaction-test.module';
import { AuthModule } from './core/auth/auth.module';
import { GestionProjetModule } from './pages/gestion-projet/gestion-projet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule,
    AuthModule,
    BrowserAnimationsModule,
    SkinFounderModule,
    EmployeesModule,
    HpApiModule,
    FlappyBirdModule,
    ReactionTestModule,
    GestionProjetModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
