import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonIcon, IonTabBar, IonTabButton, IonTabs,IonButton,IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/header/header.component';
import { SkillsTitleComponent } from 'src/app/sharedComponents/skills-title/skills-title.component';
import { AdditionProblemSettings } from 'src/app/sharedModels/addition-problem-settings.model';
import { TabsComponent } from 'src/app/tabs/tabs.component';
import { ProblemSettings } from '../../sharedModels/problem-settings.model';

@Component({
  selector: 'app-level-1-skills',
  templateUrl: './level-1-skills.page.html',
  styleUrls: ['./level-1-skills.page.scss'],
  standalone: true,
  imports: [HeaderComponent,IonGrid,
    IonRow, IonCol, IonHeader, IonButton, SkillsTitleComponent,
    IonContent, IonToolbar, IonTitle, IonTabBar, IonTabButton, IonTabs, IonIcon, TabsComponent, RouterLink]
})
export class Level1SkillsPage implements OnInit{

  title: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title="Music II Math Experience";
  }

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

  baseTenAddition(){
    const problemSettings= new AdditionProblemSettings()
    problemSettings.maxAddend= 100;
    problemSettings.minAddend = 1;
    problemSettings.level = 1;
    problemSettings.isBaseTen = true;
    problemSettings.songFile= '1-4';
    this.router.navigate(['game-play',problemSettings])
  }
}
