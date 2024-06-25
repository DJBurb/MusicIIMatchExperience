import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { IonToolbar, IonLabel,IonContent,IonItem, IonInput, IonText, IonHeader, IonButton, IonTitle } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonToolbar, IonTitle, FormsModule, CommonModule,IonButton,IonHeader, IonText, IonInput, IonItem, IonLabel, IonInput, IonContent, IonText]
})
export class LoginPage {

  email: string;
  password: string;
  constructor(private authService: AuthService, private router: Router,
    private auth:Auth, private toastController:ToastController) { }

  async login(){

    if(!this.email){
      const toast = await this.toastController.create({
        message: 'Please enter an email address',
        color: 'danger',
        duration: 6000,
        position: 'bottom',
        buttons: [{text:'Dismiss', role:'cancel'}]
      });

      await toast.present();
      return;
    }
    if(!this.password){
      const toast = await this.toastController.create({
        message: 'Please enter a password',
        color: 'danger',
        duration: 6000,
        position: 'bottom',
        buttons: [{text:'Dismiss', role:'cancel'}]
      });

      await toast.present();
      return;
    }

    this.authService.login(this.email, this.password)
    .then(async (user) => {
      if(!user.user.emailVerified){
        const toast = await this.toastController.create({
          message: 'You have not verified your email yet.  Please check your email for the verification link.  After you have clicked the verification link, you can login.',
          color: 'warning',
          duration: 6000,
          position: 'bottom',
          buttons: [{text:'Dismiss', role:'cancel'}]
        });

        await toast.present();
        this.auth.signOut();
      }
      else
      {
        this.router.navigate(['level-1-skills']);
      }
    })
    .catch(async (error) => {
      const toast = await this.toastController.create({
        message: 'Error: Login Failed. Please try again.',
        duration: 3000,
        color: 'danger',
        position: 'bottom',
        buttons: [{text:'Dismiss', role:'cancel'}]
      });

      await toast.present();
    });
  }

  goToSignup(){
    this.router.navigate(['signup']);
  }
}
