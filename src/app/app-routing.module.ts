import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Level1Component } from './level1/level1.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegistrationComponent } from './register/registration.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'level1', component: Level1Component, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
