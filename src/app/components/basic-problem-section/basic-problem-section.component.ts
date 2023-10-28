import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProblemTypes } from 'src/app/enums/problemType.enum';
import { Problem } from 'src/app/models/problem.model';
import { Results } from 'src/app/models/results.model';
import { CreateProblemService } from 'src/app/services/create-problem.service';

@Component({
  selector: 'basic-problem-section',
  templateUrl: './basic-problem-section.component.html',
  styleUrls: ['./basic-problem-section.component.scss']
})
export class BasicProblemSectionComponent implements OnInit {

  problem: Problem;
  problemText: string;
  @Output() answerResult: EventEmitter<boolean>= new EventEmitter<boolean>();
  @Output() turnOffAnswerResult: EventEmitter<void>= new EventEmitter<void>();
  @Output() problemsAreDone: EventEmitter<Results>= new EventEmitter<Results>();
  @Input() numberOfQuestions: number;
  @Input() problemType: number;
  numberOfCorrectAnswers:number = 0;
  numberOfWrongAnswers: number = 0;
  currentQuestionNumber:number = 0;
  operator: string;
  constructor(private createProblemService: CreateProblemService) { }

  ngOnInit(): void {
    this.goToNextProblem();
  }

  acceptAnswer(acceptedAnswer: number){
    if(this.problem.correctAnswerIndex === acceptedAnswer){
      this.answerResult.emit(true);
      this.numberOfCorrectAnswers++;
    }
    else{
      this.answerResult.emit(false);
      this.numberOfWrongAnswers++;
    }
    setTimeout(()=>{
      this.goToNextProblem();
    }, 2000);
  }

  goToNextProblem(){
    this.currentQuestionNumber++;
    if(this.currentQuestionNumber<=this.numberOfQuestions){
      switch(this.problemType){
        case ProblemTypes.ADDITION:{
          this.problemText= "addition";
          this.problem= this.createProblemService.get2WholeNumberAdditionProblem(0,10);
          this.operator="+"
          break;
        }
        case ProblemTypes.SUBTRACTION:{
          this.problemText= "subtraction";
          this.problem= this.createProblemService.get2WholeNumberSubtractionProblem(0,10);
          this.operator="-"
          break;
        }
        case ProblemTypes.MULTIPLICATION:{
          this.problemText= "multiplication";
          this.problem= this.createProblemService.get2WholeNumberMultiplicationProblem(0,10);
          this.operator="x"
          break;
        }
        case ProblemTypes.DIVISION:{
          this.problemText = "division";
          this.problem= this.createProblemService.get2WholeNumberDivisionProblem(0,10);
          this.operator="÷"
          break;
        }
      }
    }
    else{
      this.problemsAreDone.emit({
        numberOfCorrectAnswers:this.numberOfCorrectAnswers,
        numberOfWrongAnswers: this.numberOfWrongAnswers
      });
    }
    this.turnOffAnswerResult.emit();
  }

}
