import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // If using a service
import { Auth, UserCredential, sendEmailVerification } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports:[IonHeader, IonTitle, IonToolbar,  IonLabel, IonItem, IonInput, IonButton,IonContent,CommonModule, FormsModule]
})
export class SignupPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, private toastController: ToastController,
    private router: Router, private auth:Auth
  ) { } // If using a service

  ngOnInit() {
  }

  signup() {
    // If using AuthService
    this.authService.signup(this.email, this.password)
      .then(async (user: UserCredential) => {
        await sendEmailVerification(user.user);
        this.router.navigate(['verification-sent']);
      })
      .catch(async (error) => {
        const toast = await this.toastController.create({
          message: 'Error: '+ error,
          duration: 1500,
          position: 'bottom',
        });

        await toast.present();
      });
  }
}
