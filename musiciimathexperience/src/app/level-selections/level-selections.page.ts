import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level-selections',
  templateUrl: './level-selections.page.html',
  styleUrls: ['./level-selections.page.scss'],
})
export class LevelSelectionsPage {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private router:Router) { }

  openLevelSkills(num: number){
      this.router.navigate(['level-'+num+'-skills']);
  }

}
