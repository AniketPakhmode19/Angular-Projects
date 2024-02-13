import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GameControlComponent } from './game-control/game-control.component';
import { IntroComponent } from './intro/intro.component';
import { AComponent } from './a/a.component';
import { MatComponent } from './mat/mat.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'game-control', component: GameControlComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'a', component: AComponent },
  { path: 'mat', component: MatComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
