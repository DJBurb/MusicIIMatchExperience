import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SkillsTitleComponent } from 'src/app/sharedComponents/skills-title/skills-title.component';
import { AdditionProblemSettings } from 'src/app/sharedModels/addition-problem-settings.model';

@Component({
  selector: 'app-level-1-skills',
  templateUrl: './level-1-skills.page.html',
  styleUrls: ['./level-1-skills.page.scss'],
  standalone: true,
  imports: [IonHeader, IonButton, SkillsTitleComponent,IonContent, IonToolbar, IonTitle]
})
export class Level1SkillsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addOneDigit(){
    const problemSettings= new AdditionProblemSettings()
    problemSettings.maxAddend=9;
    problemSettings.level = 1;
    this.router.navigate(['game-play',problemSettings])
  }

  addTwoDigitPlusOneDigit(){
    const problemSettings= new AdditionProblemSettings()
    problemSettings.maxAddend=99;
    problemSettings.twoDigitPlusOneDigit= true;
    problemSettings.level = 1;
    this.router.navigate(['game-play',problemSettings])
  }

  addTwoDigit(){
    const problemSettings= new AdditionProblemSettings()
    problemSettings.maxAddend= 99;
    problemSettings.minAddend = 10;
    problemSettings.level = 1;
    this.router.navigate(['game-play',problemSettings])
  }
}
