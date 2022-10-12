import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProblemType } from '../enums/problemType.enum';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  goToScene(problemsToNavigateTo: string){
    if(problemsToNavigateTo==='fractions'){
      this.router.navigate(['scene', {
        id: 1
      }]);
    }

  }

  logout(){
    this.authenticationService.logout().subscribe(()=>{
      this.router.navigate(['/login']);
    });
   ;
  }
}
