import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, 
    private snackBarService: SnackBarService) {}

  login() {
    this.authService.loginWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        console.log(userCredential);
        this.router.navigateByUrl('menu');
      })
      .catch(error => {
        if(error.code ==="auth/wrong-password" || error.code ==="auth/user-not-found"){
          this.snackBarService.showErrorSnackBar("The user does not exist or the password is incorrect");
        }
        else{
          this.snackBarService.showErrorSnackBar(error.message);
        }  
      });
  }
}
