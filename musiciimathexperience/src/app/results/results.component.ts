import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonContent, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  standalone: true,
  imports: [IonLabel, IonContent, CommonModule]
})
export class ResultsComponent implements OnInit{

  @Input() correctAnswers: number=0;
  @Input() wrongAnswers: number=0;
  totalAnswers: number;

  constructor() {

  }
  ngOnInit(): void {
    this.totalAnswers = Number(this.correctAnswers) + Number(this.wrongAnswers);
  }

}
