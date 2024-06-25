import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, Auth, browserLocalPersistence, User, onAuthStateChanged } from '@angular/fire/auth';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated: boolean;
  private _user: User;

  constructor(private afAuth:AngularFireAuth, private auth:Auth) {
   }

   public get user(){
    return this._user;
   }
   public set user(thisUser: User) {
    this._user = thisUser;
}
   public get isAuthenticated() {
    return this._isAuthenticated;
   }

   public set isAuthenticated(authenticated: boolean) {
        this._isAuthenticated = authenticated;
    }


  signup(email: string, password: string) {
    this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {

    return signInWithEmailAndPassword(this.auth, email, password);
  }

  resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }
}
