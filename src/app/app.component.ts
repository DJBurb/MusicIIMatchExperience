
import { FractionProblemConfig } from './models/fractionModels/fractionProblemConfig.model';
import { FractionService } from './services/fractions.service';
import { FractionProblems } from './models/fractionModels/fractionProblems.model';
import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {

  title = 'Music2MathExperience';
  fractionProblemConfig: FractionProblemConfig;
  constructor(private fractionService: FractionService){

  }
  ngOnInit(): void {
    this.fractionProblemConfig={
      maxWholeNumber: 10,
      allowNegatives: false,
      maxDenominator: 10,
      useSameDenominator: true,
      maxNumerator: 20,
      numberOfProblems: 10
    }
  }
  ngAfterViewInit(): void {

  }

}

