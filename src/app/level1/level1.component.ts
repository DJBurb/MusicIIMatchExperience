import {AngularFirestore  } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Results } from '../models/results.model';
import { Router } from '@angular/router';
import { SubLevel } from '../models/sublevel.model';
import { FirebaseCollections } from '../enums/firebase-collection.enum';
import { LevelData } from '../models/level-data.model';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss']
})
export class Level1Component implements OnInit {

  numberOfQuestions: number=10;
  answerResultState: number= 2;
  makeResultsVisible: boolean;
  instrumentToEarn: number;
  levelData:LevelData;
  subLevel: number;
  results: Results;
  constructor(private router: Router, private firestore: AngularFirestore) {
     let sub =this.router.getCurrentNavigation()?.extras.state;
     if(sub){
      this.subLevel = (sub as SubLevel).subLevel;
    }
    else{
      this.router.navigateByUrl('menu');
    }
   }

  async ngOnInit(): Promise<void> {
    const documentId = '1-'+this.subLevel;
    const documentRef = this.firestore.collection(FirebaseCollections.LEVELS).doc(documentId);

    documentRef.valueChanges().subscribe((data) => {
      if(data){
        const levelData =data as LevelData;
        this.numberOfQuestions = levelData.numberOfQuestions;
        this.instrumentToEarn = levelData.instrumentToEarn;
      }
    });
  }

  acceptAnswerResult(answerResult:boolean){
    if(answerResult===true){
      this.answerResultState = 1;
    }
    else{
      this.answerResultState = 0;
    }
  }

  turnOffAnswerResult(){
    this.answerResultState=2;
  }

  showResults(results:Results){
    this.results = results;
    this.makeResultsVisible= true;
  }

  toggleResults(showResults: boolean){
    this.makeResultsVisible=showResults;
  }

}
