import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Music 2 Math Experience';
  isAuthenticated: boolean;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth){

  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
  logOut(){
    this.afAuth.signOut().then(() => {
      this.isAuthenticated = false;
      this.router.navigateByUrl('login');
    });
    
  }
}
