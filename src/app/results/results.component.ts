import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import { Results } from '../models/results.model';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { FirebaseCollections } from '../enums/firebase-collection.enum';
import { UserInventory } from '../models/user-inventory.model';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements AfterViewInit {
  @Input() results: Results;
  @Input() subLevel: number;
  @Input() levelName: string;
  @Input() instrumentToEarn: number;
  @Output() toggleResults:EventEmitter<boolean>= new EventEmitter();

  constructor(private router: Router, private afAuth:AngularFireAuth, private firestore: AngularFirestore) { }

  ngAfterViewInit(): void {
    if(this.results.numberOfWrongAnswers === 0){
      this.updateUserInventory();
    }
  }
  updateUserInventory() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const uid = user.uid;
        this.firestore.collection(FirebaseCollections.USER_INVENTORY).doc(uid).get().subscribe((doc) => {
          if (doc.exists) {
            const data = doc.data() as UserInventory;
            let instrumentsEarned = data.instrumentsEarned;
            if(instrumentsEarned){
              if(!instrumentsEarned.includes(this.instrumentToEarn)){
                instrumentsEarned.push(this.instrumentToEarn);
                this.firestore.collection(FirebaseCollections.USER_INVENTORY).doc(uid).set({
                    instrumentsEarned: instrumentsEarned
                })
                .catch((error) => {
                  console.error('Error writing document: ', error);
                });
              }
            }
            else{
              this.addToEmptyInstruments(uid);
            }
          } else {
            this.addToEmptyInstruments(uid);
          }
        }, (error) => {
          console.error('Error getting document:', error);
        });
      } else {
        console.log("No user logged in.");
      }
    });
  }

  tryAgain(){
    this.toggleResults.emit(false);
    this.router.navigate([this.levelName], { state: { subLevel: this.subLevel } });
   }

  goToMenu(){
    this.router.navigateByUrl('menu');
  }

  addToEmptyInstruments(uid: string){
    let userInventory: UserInventory={
      instrumentsEarned: [this.instrumentToEarn]
    }
    this.firestore.collection(FirebaseCollections.USER_INVENTORY).doc(uid).set(userInventory)
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
  }

}
