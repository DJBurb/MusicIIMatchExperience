import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProblemResults } from '../sharedModels/problem-results.model';
import { MathComponent } from '../math/component/math.component';
import { CommonModule } from '@angular/common';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.page.html',
  styleUrls: ['./game-play.page.scss'],
  standalone: true,
  imports: [MathComponent, CommonModule, IonButton]
})
export class GamePlayPage implements OnInit {
  myParams: any;
  mathType: number;
  correctAnswers: number=0;
  wrongAnswers: number=0;
  constructor(private route: ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.myParams = params;
    } );
  }

  showResults(results:ProblemResults){
    results.level = this.myParams.level;
    results.songFile = this.myParams.songFile;
    this.router.navigate(['finished-results', results])
  }

  goToLevelSkillsMenu(){
    this.router.navigate(['level-'+this.myParams.level+'-skills']);
  }

}
