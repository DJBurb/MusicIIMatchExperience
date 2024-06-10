import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-level-12-skills',
  templateUrl: './level-12-skills.page.html',
  styleUrls: ['./level-12-skills.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Level12SkillsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
