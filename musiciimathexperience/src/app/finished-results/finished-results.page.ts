import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { ResultsComponent } from '../results/results.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProblemResults } from '../sharedModels/problem-results.model';

@Component({
  selector: 'app-finished-results',
  templateUrl: './finished-results.page.html',
  styleUrls: ['./finished-results.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ResultsComponent]
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
