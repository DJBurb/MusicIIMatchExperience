import { Component, Input, OnInit } from '@angular/core';
import { ResultsComponent } from 'src/app/results/results.component';

@Component({
  selector: 'app-results-test',
  templateUrl: './results-test.component.html',
  styleUrls: ['./results-test.component.scss'],
  standalone: true,
  imports:[ResultsComponent]
})
export class ResultsTestComponent {


  constructor() { }


}
