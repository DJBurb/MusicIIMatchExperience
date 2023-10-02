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
  firstName: string='';
  lastName: string ='';
  confirmPassword: string = '';
  registrationSuccess: boolean;

  constructor(private authService: AuthService, private snackBarService: SnackBarService, private router:Router) {}

  async register() {
    if (this.password !== this.confirmPassword) {
      this.snackBarService.showErrorSnackBar("Passwords don't match")
      return;
    }

    this.registrationSuccess = await this.authService.registerWithEmailAndPassword(this.email, this.password);
    if(this.registrationSuccess){
      this.router.navigateByUrl('login');
    }
  }
}
