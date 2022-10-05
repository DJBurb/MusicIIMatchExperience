import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FractionProblemConfig } from '../models/fractionModels/fractionProblemConfig.model';
import { FractionProblems } from '../models/fractionModels/fractionProblems.model';
import { ChalkBoardDialogComponent } from '../chalk-board-dialog/chalk-board-dialog.component';
import { ProblemType } from '../enums/problemType.enum';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements AfterViewInit, OnInit{

  @Input() fractionProblemConfig: FractionProblemConfig;
  questions: FractionProblems;
  fractionProblemConfigReady: boolean;

  constructor(private chalkBoardDialog: MatDialog, private route: ActivatedRoute) {

   }
  ngOnInit(): void {

    const test = this.route.snapshot.paramMap.get('id');
    console.log(test);
    this.fractionProblemConfig={maxWholeNumber: 10,
      allowNegatives: false,
      maxDenominator: 10,
      useSameDenominator: true,
      maxNumerator: 20,
      numberOfProblems: 10
    }
  }


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
