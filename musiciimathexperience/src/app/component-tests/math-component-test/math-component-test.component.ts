import { Component, OnInit } from '@angular/core';
import { MathComponent } from 'src/app/math/component/math.component';
import { ProblemResults } from 'src/app/sharedModels/problem-results.model';

@Component({
  selector: 'app-math-component-test',
  templateUrl: './math-component-test.component.html',
  styleUrls: ['./math-component-test.component.scss'],
  standalone: true,
  imports: [MathComponent],
})
export class MathComponentTestComponent  {

  constructor() { }

  showResults(results:ProblemResults){
    console.log(results);
  }
}
