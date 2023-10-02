import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private snackBarService: SnackBarService) { }

  loginWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async registerWithEmailAndPassword(email: string, password: string): Promise<boolean> {

    try{
      const user = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await user.user?.sendEmailVerification();
      return true;
    }
    catch(error:any){
      this.snackBarService.showErrorSnackBar(error.message);
      return false;
    }
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