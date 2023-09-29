import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  email: string = '';

  constructor(private authService: AuthService) {}

  resetPassword() {
    this.authService.resetPassword(this.email)
      .then(() => {
        // Handle successful password reset request, e.g., display a confirmation message.
      })
      .catch(error => {
        // Handle password reset error, e.g., display an error message.
        console.error(error);
      });
  }
}
