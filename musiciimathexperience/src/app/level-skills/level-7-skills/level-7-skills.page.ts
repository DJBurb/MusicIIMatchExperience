import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/header/header.component';
import { SkillsTitleComponent } from 'src/app/sharedComponents/skills-title/skills-title.component';
import { TabsComponent } from 'src/app/tabs/tabs.component';

@Component({
  selector: 'app-level-7-skills',
  templateUrl: './level-7-skills.page.html',
  styleUrls: ['./level-7-skills.page.scss'],
  standalone: true,
  imports:[HeaderComponent,SkillsTitleComponent, TabsComponent, CommonModule, IonContent, RouterLink]
})
export class Level7SkillsPage  {

  title: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title="Music II Math Experience";
  }

}
