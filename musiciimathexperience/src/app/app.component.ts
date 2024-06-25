import { Component, OnInit } from '@angular/core';
import { MenuOption } from './math/models/menu-option.model';
import { Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // isLevelSelectionMode= true;
  // public appPages: MenuOption[];
  // levelMenu: MenuOption[]=[
  //   { title: 'Level 1', url: '/level-1-skills', icon: '' },
  //   { title: 'Level 2', url: '/level-2-skills', icon: '' },
  //   { title: 'Level 3', url: '/level-3-skills', icon: '' },
  //   { title: 'Level 4', url: '/level-4-skills', icon: '' },
  //   { title: 'Level 5', url: '/level-5-skills', icon: '' },
  //   { title: 'Level 6', url: '/level-6-skills', icon: '' },
  //   { title: 'Level 7', url: '/level-7-skills', icon: '' },
  //   { title: 'Level 8', url: '/level-8-skills', icon: '' },
  //   { title: 'Level 9', url: '/level-9-skills', icon: '' },
  //   { title: 'Level 10', url: '/level-10-skills', icon: '' },
  //   { title: 'Level 11', url: '/level-11-skills', icon: '' },
  //   { title: 'Level 12', url: '/level-12-skills', icon: '' }
  // ];
  // showMenu: boolean;
  // loggedIn: boolean;
  // userName: string;
  // public appPages = [
  //   { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
  //   { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
  //   { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
  //   { title: 'Archived', url: '/folder/archived', icon: 'archive' },
  //   { title: 'Trash', url: '/folder/trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  // ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router:Router, private authService:AuthService, private auth:Auth) {

  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  ngOnInit(): void {
    // if(this.isLevelSelectionMode){
    //   this.appPages= this.levelMenu;
    // }
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authService.user = user;
        this.authService.isAuthenticated =true;
        this.router.navigate(['level-selections']);
        // this.showMenu=true;
        // this.userName = user.displayName? user.displayName : user.email;
        // if(this.router.url === "/" || this.router.url === "/login"){
        //   this.router.navigate(['level-1-skills']);
        // }
      } else {
        // this.showMenu=false;
        // this.authService.user = null;
        // this.authService.isAuthenticated= false;
      }
    });
  }

  openLevelSkills(num: number){

  }
  openMusicInventory(){

  }
}
