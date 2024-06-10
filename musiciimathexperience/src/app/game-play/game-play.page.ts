import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MathComponent } from '../math/component/math.component';
import { ProblemResults } from '../sharedModels/problem-results.model';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.page.html',
  styleUrls: ['./game-play.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule, MathComponent, ResultsComponent]
})
export class GamePlayPage implements OnInit {
  myParams: any;
  mathType: number;
  correctAnswers: number;
  wrongAnswers: number;
  constructor(private route: ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.myParams = params;
    } );
  }

  showResults(results:ProblemResults){
    results.level = this.myParams.level;
    this.router.navigate(['finished-results', results])
  }

}
