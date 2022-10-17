import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../app/menu/menu.component';
import { SceneComponent } from '../app/scene/scene.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToMenu = () => redirectLoggedInTo(['menu']);
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, canActivate:[AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin} },
  { path: 'scene', component: SceneComponent, canActivate:[AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectLoggedInToMenu }},
   {path: 'signup', component: SignUpComponent}
];
@NgModule({
  declarations: [
    MenuComponent,
    SceneComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}