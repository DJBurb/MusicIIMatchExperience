import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Results } from '../models/results.model';
import { Router } from '@angular/router';
import { SubLevel } from '../models/sublevel.model';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss']
})
export class Level1Component implements OnInit {

  numberOfQuestions: number = 10;
  answerResultState: number= 2;
  makeResultsVisible: boolean;
  subLevel: number;
  results: Results;
  constructor(private router: Router) {
     let sub =this.router.getCurrentNavigation()?.extras.state;
     if(sub){
      this.subLevel = (sub as SubLevel).subLevel;
    }
   }

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
    this.results = results;
    this.makeResultsVisible= true;
  }

  tryAgain(){
    this.makeResultsVisible= false;
    this.router.navigate(['level1'], { state: { subLevel: this.subLevel } });
   }

  goToMenu(){
    this.router.navigateByUrl('menu');
  }

}
