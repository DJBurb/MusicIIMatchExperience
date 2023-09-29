import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  loginWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  registerWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  logout() {
    return this.afAuth.signOut();
  }

  isAuthenticated() {
    return this.afAuth.authState;
  }
}