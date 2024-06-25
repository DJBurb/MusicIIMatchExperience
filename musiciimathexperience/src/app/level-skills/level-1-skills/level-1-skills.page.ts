import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton,IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid } from '@ionic/angular/standalone';
import { SkillsTitleComponent } from 'src/app/sharedComponents/skills-title/skills-title.component';
import { AdditionProblemSettings } from 'src/app/sharedModels/addition-problem-settings.model';
import { ProblemSettings } from 'src/app/sharedModels/problem-settings.model';

@Component({
  selector: 'app-level-1-skills',
  templateUrl: './level-1-skills.page.html',
  styleUrls: ['./level-1-skills.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonHeader, IonButton, SkillsTitleComponent,IonContent, IonToolbar, IonTitle]
})
export class Level1SkillsPage {

  constructor(private router: Router) { }

  addOneDigit(){
    const problemSettings= new AdditionProblemSettings()
    problemSettings.maxAddend=9;
    problemSettings.level = 1;
    problemSettings.songFile= '1-1';
    this.router.navigate(['game-play',problemSettings])
  }

  addTwoDigitPlusOneDigit(){
    const problemSettings= new AdditionProblemSettings()
    problemSettings.maxAddend=99;
    problemSettings.twoDigitPlusOneDigit= true;
    problemSettings.level = 1;
    problemSettings.songFile= '1-2';
    this.router.navigate(['game-play',problemSettings])
  }

  addTwoDigit(){
    const problemSettings= new AdditionProblemSettings()
    problemSettings.maxAddend= 99;
    problemSettings.minAddend = 10;
    problemSettings.level = 1;
    problemSettings.songFile= '1-3';
    this.router.navigate(['game-play',problemSettings])
  }
}
