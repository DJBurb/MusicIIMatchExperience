import { IonGrid, IonRow, IonCol,IonSelectOption,IonSelect,IonModal,IonContent,IonTabBar, IonTabButton, IonTabs, IonIcon, IonButton, IonHeader, IonLabel } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports:[CommonModule,IonGrid, IonCol, IonRow,IonSelectOption,IonSelect,IonLabel,IonTabBar, HeaderComponent, IonTabButton, IonTabs, IonIcon, IonContent, IonModal, IonButton]
})
export class TabsComponent implements OnInit{
  isModalOpen = false;
  header:string;
  currentSongNumber: number;
  songs = Array(12).fill(0);

  constructor() { }

  ngOnInit(): void {
    this.header="Song Inventory"
    this.currentSongNumber=0;
  }

  onBack(){
    this.currentSongNumber=0;
  }

  displaySong(songNumber: number){
    this.currentSongNumber=songNumber;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
