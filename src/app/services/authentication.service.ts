import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, browserLocalPersistence, User } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private auth:Auth, private router: Router) {
   }

  login(username: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  signUp(name: string, email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password))
    .pipe(
      switchMap(({user})=> updateProfile(user,{displayName: name}))
    );
  }

  logout(){
    return this.auth.signOut().then(() => {
      localStorage.removeItem('m2m_userId');
      this.router.navigate(['/login']);
    });
  }

  get isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('m2m_userId')!);
    return user !== null && user !=='';
  }
}
