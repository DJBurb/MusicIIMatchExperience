import { Component, Input, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FractionProblemConfig } from '../models/fractionModels/fractionProblemConfig.model';
import { FractionProblems } from '../models/fractionModels/fractionProblems.model';
import { ChalkBoardDialogComponent } from '../chalk-board-dialog/chalk-board-dialog.component';
import { ProblemType } from '../enums/problemType.enum';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements AfterViewInit{

  @Input() fractionProblemConfig: FractionProblemConfig;
  questions: FractionProblems;
  fractionProblemConfigReady: boolean;

  constructor(private chalkBoardDialog: MatDialog) { }

  ngAfterViewInit(): void {
   // this.startLesson();
  }

  startLesson(){
    //this.questions=this.fractionService.getFractionQuestions(this.fractionProblemConfig)
    this.chalkBoardDialog.open(ChalkBoardDialogComponent, {
      data: {problemType: ProblemType.Fractions, problemConfig: this.fractionProblemConfig},
      panelClass: 'chalkboardBoarder'
    });
  }
}
