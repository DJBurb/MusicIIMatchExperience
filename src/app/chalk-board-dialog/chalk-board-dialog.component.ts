import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProblemType } from '../enums/problemType.enum';
import { FractionService } from '../services/fractions.service';
import { FractionProblemConfig } from '../models/fractionModels/fractionProblemConfig.model';
import { OperationType } from '../enums/operationType.enum';

@Component({
  selector: 'app-chalk-board-dialog',
  templateUrl: './chalk-board-dialog.component.html',
  styleUrls: ['./chalk-board-dialog.component.scss']
})
export class ChalkBoardDialogComponent {

  currentQuestion: string;
  problemString: string;
  currentResult: string;
  currentProblemSentence: string;
  result: string;
  currentAnswerChoices: string[];
  currentLetterAnswer: string;
  hasDivisionSign: boolean;
  rightAnswers: number;
  wrongAnswers: number
  finished: boolean;
  problemNumber: number = 0;
  problemConfig: FractionProblemConfig;
  splitCurrentProblem: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fractionService: FractionService,
  private dialogRef: MatDialogRef<ChalkBoardDialogComponent>) {
      this.problemConfig = data.problemConfig as FractionProblemConfig;
  }

  getCurrentProblem(){
    this.currentResult = "";
      if(this.problemNumber > this.problemConfig.numberOfProblems){
        console.log("Finished");
        this.dialogRef.close();
      }

      if(this.data.problemType === ProblemType.Fractions){
        const currentProblem = this.fractionService.getFractionQuestion(this.data.problemConfig as FractionProblemConfig);
        this.hasDivisionSign = currentProblem? currentProblem.problem.includes("÷") : false;

        this.currentQuestion= currentProblem ? currentProblem.question : "";
        this.currentProblemSentence = currentProblem? currentProblem.problem : "";
        if(this.hasDivisionSign){
          this.splitCurrentProblem =this.currentProblemSentence.split("÷");
        }
        this.currentAnswerChoices = currentProblem ? currentProblem.answerChoices : [];
        this.currentLetterAnswer = currentProblem ? currentProblem.letterAnswer: "";
      }
      this.problemNumber++
  }

  selectChoice(letterAnswer: string){
     if(letterAnswer === this.currentLetterAnswer){
      this.currentResult = "Correct";
      this.rightAnswers++;
     }
     else{
      this.currentResult = "Wrong";
      this.wrongAnswers++
     }
  }

}
