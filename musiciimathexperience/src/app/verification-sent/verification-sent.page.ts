import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonItem, IonTitle, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-verification-sent',
  templateUrl: './verification-sent.page.html',
  styleUrls: ['./verification-sent.page.scss'],
  standalone: true,
  imports:[IonHeader,IonTitle,IonToolbar,IonContent,IonItem]
})
export class VerificationSentPage implements OnInit {
  userEmail: string;

  constructor(private auth: Auth, private router:Router) { }

  ngOnInit() {
    if(!this.auth?.currentUser?.emailVerified){
      this.userEmail = this.auth.currentUser.email;
    }
    else{
      // navigate to menu
    }

  }

  returnToLogin(){
    this.router.navigate(['login'])
  }

}
