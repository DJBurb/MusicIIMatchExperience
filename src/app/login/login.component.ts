// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.loginWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Handle successful login, e.g., navigate to a dashboard.
        console.log(userCredential);
        this.router.navigateByUrl('menu');
      })
      .catch(error => {
        // Handle login error, e.g., display an error message.
        console.error(error);
      });
  }
}
