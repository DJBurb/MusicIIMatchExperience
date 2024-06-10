import { Component, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { FirebaseAuthService } from '../services/firebase-auth.service';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonList, IonRow, IonToolbar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.page.html',
  styleUrls: ['sign-in.page.scss'],
  standalone: true,
  imports:[
    IonHeader,
    IonItem,
    IonToolbar,
    IonContent,
    IonList,
    ReactiveFormsModule,
    IonIcon,
    IonButton,
    IonRow,
    RouterModule,
    CommonModule
  ]
})
export class SignInPage {
  signInForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };

  constructor(
  //  public angularFire: AngularFireAuth,
    public router: Router,
    private ngZone: NgZone,
  //  private authService: FirebaseAuthService
  ) {
    this.signInForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });

    // this.authRedirectResult = this.authService.getRedirectResult()
    // .subscribe(result => {
    //   if (result.user) {
    //     this.redirectLoggedUserToProfilePage();
    //   } else if (result.error) {
    //     this.submitError = result.error;
    //   }
    // });
  }

  // Once the auth provider finished the authentication flow, and the auth redirect completes,
  // redirect the user to the profile page
  redirectLoggedUserToProfilePage() {
    // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
    // That's why we need to wrap the router navigation call inside an ngZone wrapper
    this.ngZone.run(() => {
      this.router.navigate(['profile']);
    });
  }

  signInWithEmail() {
    // this.authService.signInWithEmail(this.signInForm.value['email'], this.signInForm.value['password'])
    // .then(user => {
    //   // navigate to user profile
    //   this.redirectLoggedUserToProfilePage();
    // })
    // .catch(error => {
    //   this.submitError = error.message;
    // });
  }

  facebookSignIn() {
    // this.authService.signInWithFacebook()
    // .then((result: any) => {
    //   if (result.additionalUserInfo) {
    //     this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
    //   }
    //   this.redirectLoggedUserToProfilePage();
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  googleSignIn() {
    // this.authService.signInWithGoogle()
    // .then((result: any) => {
    //   if (result.additionalUserInfo) {
    //     this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
    //   }
    //   this.redirectLoggedUserToProfilePage();
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  twitterSignIn() {
    // this.authService.signInWithTwitter()
    // .then((result: any) => {
    //   if (result.additionalUserInfo) {
    //     this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
    //   }
    //   this.redirectLoggedUserToProfilePage();
    // }).catch((error) => {
    //   console.log(error);
    // });
  }
}
