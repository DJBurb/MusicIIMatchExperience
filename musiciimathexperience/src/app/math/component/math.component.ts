import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonContent, IonItem, IonLabel, IonToast } from '@ionic/angular/standalone';
import { MathTypes } from 'src/app/enums/math-type.enum';
import { MathService } from '../service/math.service';
import { MathProblem } from '../models/math-problem.model';
import { CommonModule } from '@angular/common';
import { ProblemResults } from 'src/app/sharedModels/problem-results.model';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss'],
  standalone: true,
  imports:[
    IonContent,
    IonItem,
    IonLabel,
    IonToast,
    CommonModule
  ]
})
export class MathComponent  implements OnInit {

  @Input() mathType: number = 0;
  @Input() numberOfProblems: number = 10;
  @Input() minAddend: number = 0;
  @Input() maxAddend: number = 10;
  @Input() allowNegatives: boolean;
  @Input() twoDigitPlusOneDigit: boolean;
  @Input() level: number;
  @Output() results= new EventEmitter<ProblemResults>()

  problems: MathProblem[];
  currentProblem: MathProblem;
  currentProblemIndex:number=0;
  correctAnswers: number = 0;
  wrongAnswers: number = 0;
  isCorrect: boolean;
  isWrong: boolean;
  disableClick: boolean;

  constructor(private mathService: MathService) {

   }

  ngOnInit() {
    this.getMathProblems();
  }

  getMathProblems(){
    if(this.mathType.toString() === (MathTypes.Addition).toString()){
      this.problems = this.mathService.generateAdditionProblems(this.numberOfProblems, this.minAddend, this.maxAddend, this.twoDigitPlusOneDigit);
    }
    else if(this.mathType === MathTypes.Subtraction){
      this.problems = this.mathService.generateSubtractionProblems(this.numberOfProblems, this.minAddend, this.maxAddend, this.allowNegatives);
    }

    if(this.problems?.length > 0){
      this.getCurrentProblem();
    }
  }

  getCurrentProblem(){
    this.currentProblem = this.problems[this.currentProblemIndex];
  }

  acceptAnswer(chosenAnswer: number){
      if(this.disableClick){
        return;
      }
      if(chosenAnswer=== this.currentProblem.correctAnswer){
        this.correctAnswers = this.correctAnswers + 1;
        this.isCorrect = true;
        this.disableClick = true;
        setTimeout(()=>{
          this.isCorrect=false;
          this.currentProblemIndex++;
          this.getCurrentProblem();
          this.disableClick = false;
        }, 2000);
      }
      else{
        this.wrongAnswers = this.wrongAnswers + 1;
        this.isWrong = true;
        this.disableClick = true;
        setTimeout(()=>{
          this.isWrong=false;
          this.currentProblemIndex++;
          this.getCurrentProblem();
          this.disableClick = false;
        }, 2000);
      }

      if(this.currentProblemIndex === this.numberOfProblems-1){
          this.results.emit({
            correctAnswers: this.correctAnswers,
            wrongAnswers: this.wrongAnswers,
            mathType: this.mathType,
            level: this.level
          })
      }
  }
}
