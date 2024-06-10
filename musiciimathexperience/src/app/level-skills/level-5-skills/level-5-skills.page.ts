import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-level-5-skills',
  templateUrl: './level-5-skills.page.html',
  styleUrls: ['./level-5-skills.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Level5SkillsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
