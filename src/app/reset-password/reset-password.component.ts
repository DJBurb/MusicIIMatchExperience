import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SnackBarService } from '../services/snack-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  email: string = '';
  resetSuccessful: boolean;

  constructor(private authService: AuthService, private snackBarService: SnackBarService, private router:Router) {}

  resetPassword() {
    this.authService.resetPassword(this.email)
      .then(() => {
        this.resetSuccessful = true;
      })
      .catch(error => {
        // Handle password reset error, e.g., display an error message.
        this.snackBarService.showErrorSnackBar(error.message);
      });
  }

  goToLogin(){
    this.router.navigateByUrl('login');
  }
}
