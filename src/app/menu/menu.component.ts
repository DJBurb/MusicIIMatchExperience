import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router){

  }
  goToLevel(level: number, subLevel:number){
     this.router.navigate(['level'+level], { state: { subLevel: subLevel } });
  }
}
