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

  @Input() correctAnswers: number;
  @Input() wrongAnswers: number;
  totalAnswers: number;

  constructor() {

   }
  ngOnInit() {
    this.totalAnswers = Number(this.correctAnswers) + Number(this.wrongAnswers);
  }


}
