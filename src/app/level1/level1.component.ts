import { Component, OnInit } from '@angular/core';
import { Results } from '../models/results.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss']
})
export class Level1Component implements OnInit {

  numberOfQuestions: number = 20;
  answerResultState: number= 2;
  constructor(private router: Router) { }

  ngOnInit(): void {
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
    this.router.navigate(['results'],  { state: { results: results }} );
  }

}
