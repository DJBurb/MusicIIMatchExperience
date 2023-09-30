import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SnackBarService } from '../services/snack-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private snackBarService: SnackBarService, private router:Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.snackBarService.showErrorSnackBar("Passwords don't match")
      return;
    }

    this.authService.registerWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.router.navigateByUrl('menu');
      })
      .catch(error => {
        this.snackBarService.showErrorSnackBar(error);
      });
  }
}
