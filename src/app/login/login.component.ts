import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../services/snack-bar.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularDelegate } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  isLoggedIn: boolean=true;

  constructor(private authService: AuthService, private router: Router, 
    private snackBarService: SnackBarService, private afAuth: AngularFireAuth) {

    }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.isLoggedIn = !!user;
      if(this.isLoggedIn){
        this.router.navigateByUrl('menu');
      }
    });
  }

  login() {
    this.authService.loginWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        console.log(userCredential);
        if(userCredential.user?.emailVerified){
          this.router.navigateByUrl('menu');
        }
        else{
          this.snackBarService.showErrorSnackBar('Please check your email and verify your account, by clicking the verification link')
        }
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
