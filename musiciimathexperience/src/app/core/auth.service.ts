import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { FirebaseUserModel } from "./user.model"; // Import your user model (if applicable)

// Firebase Auth imports
import { getAuth, signInWithPopup, signInWithCredential } from "firebase/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth"; // Keep this line for compatibility

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public platform: Platform
  ){}

}
