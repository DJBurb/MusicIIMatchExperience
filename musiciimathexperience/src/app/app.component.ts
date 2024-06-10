import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { MenuOption } from './math/models/menu-option.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList, IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,IonRouterLink, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  isLevelSelectionMode= true;
  public appPages: MenuOption[];
  levelMenu: MenuOption[]=[
    { title: 'Level 1', url: '/level-1-skills', icon: '' },
    { title: 'Level 2', url: '/level-2-skills', icon: '' },
    { title: 'Level 3', url: '/level-3-skills', icon: '' },
    { title: 'Level 4', url: '/level-4-skills', icon: '' },
    { title: 'Level 5', url: '/level-5-skills', icon: '' },
    { title: 'Level 6', url: '/level-6-skills', icon: '' },
    { title: 'Level 7', url: '/level-7-skills', icon: '' },
    { title: 'Level 8', url: '/level-8-skills', icon: '' },
    { title: 'Level 9', url: '/level-9-skills', icon: '' },
    { title: 'Level 10', url: '/level-10-skills', icon: '' },
    { title: 'Level 11', url: '/level-11-skills', icon: '' },
    { title: 'Level 12', url: '/level-12-skills', icon: '' }
  ];
  // public appPages = [
  //   { title: 'MathComponent', url: '/math-component-test', icon: '' },
  //   { title: 'Results', url: '/results-test', icon: '' },
  //   { title: 'sign-in', url: '/sign-in', icon: '' },
  //   { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
  //   { title: 'Archived', url: '/folder/archived', icon: 'archive' },
  //   { title: 'Trash', url: '/folder/trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  // ];
  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
  ngOnInit(): void {
    if(this.isLevelSelectionMode){
      this.appPages= this.levelMenu;
    }
  }
}
