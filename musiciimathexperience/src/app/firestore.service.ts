import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

  getUserDocument(uid: string) {
    return this.firestore.collection('users').doc(uid).get().toPromise();
  }

  updateUserSongs(uid: string, songs: string[]) {
    return this.firestore.collection('users').doc(uid).update({ songs });
  }

  createUserDocument(uid: string, songs: string[]) {
    return this.firestore.collection('users').doc(uid).set({ songs });
  }
}
