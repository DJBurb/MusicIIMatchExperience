import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  register() {
    if (this.password !== this.confirmPassword) {
      // Passwords don't match; handle error or display a message.
      console.error("Passwords don't match");
      return;
    }

    this.authService.registerWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // Handle successful registration, e.g., navigate to a confirmation page.
      })
      .catch(error => {
        // Handle registration error, e.g., display an error message.
        console.error(error);
      });
  }
}
