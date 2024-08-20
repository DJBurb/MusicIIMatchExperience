
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { IonContent, IonGrid, IonRow ,IonCol} from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-level-selections',
  templateUrl: './level-selections.page.html',
  styleUrls: ['./level-selections.page.scss'],
  standalone: true,
  imports:[HeaderComponent, IonContent,IonGrid, IonRow, IonCol,CommonModule]
})
export class LevelSelectionsPage implements OnInit{
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  title: string;

  constructor(private router:Router) { }
  ngOnInit(): void {
    this.title = "Music II Math Experience";
  }

  openLevelSkills(num: number){
      this.router.navigate(['level-'+num+'-skills']);
  }

}
