import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProblemResults } from '../sharedModels/problem-results.model';
import { IonButton } from "@ionic/angular/standalone";
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-finished-results',
  templateUrl: './finished-results.page.html',
  styleUrls: ['./finished-results.page.scss'],
  standalone: true,
  imports: [IonButton, ResultsComponent]
})

export class FinishedResultsPage implements OnInit {
  results: ProblemResults;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.results = params as ProblemResults;
    } );
  }

  goToLevelSkillsMenu(){
    this.router.navigate(['level-'+this.results.level+'-skills']);
  }

}
