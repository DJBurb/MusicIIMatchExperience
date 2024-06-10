import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-level-2-skills',
  templateUrl: './level-2-skills.page.html',
  styleUrls: ['./level-2-skills.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Level2SkillsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
