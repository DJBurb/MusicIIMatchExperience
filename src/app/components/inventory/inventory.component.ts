import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseCollections } from 'src/app/enums/firebase-collection.enum';
import { UserInventory } from 'src/app/models/user-inventory.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  instrumentsEarned: number[]=[];
  constructor(private afAuth:AngularFireAuth, private firestore:AngularFirestore) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const uid = user.uid;
        this.firestore.collection(FirebaseCollections.USER_INVENTORY).doc(uid).get().subscribe((doc) => {
          if (doc.exists) {
            const data = doc.data() as UserInventory;
            this.instrumentsEarned = data.instrumentsEarned;
          } 
        }, (error) => {
          console.error('Error getting document:', error);
        });
      } else {
        console.log("No user logged in.");
      }
    });
  }

}
