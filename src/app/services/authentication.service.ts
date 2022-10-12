import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn: boolean;

  constructor(private auth:Auth) {
    auth.onAuthStateChanged(res => {
      if (res && res.uid) {
        this.isLoggedIn= true;
      } else {
        this.isLoggedIn=false;
      }
    });
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
    return from(this.auth.signOut());
  }

  isAuthenticated(){
    return this.isLoggedIn
  }
}
