import { IonGrid, IonRow, IonCol,IonSelectOption,IonSelect,IonModal,IonContent,IonTabBar, IonTabButton, IonTabs, IonIcon, IonButton, IonHeader, IonLabel } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../firestore.service';
import { AuthService } from '../auth.service';
import { PlaySongService } from '../play-song.service';

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
  availableSongButtons: string[]=[];
  visibleSongs : string[]=[];
  currentSongNumber: number;
  songButtons = Array(12).fill(0);
  songs: string[];

  constructor(private firestoreService: FirestoreService, private authService: AuthService, private playSongService: PlaySongService) { }

  async ngOnInit(): Promise<void> {
    this.header="Song Inventory"
    this.currentSongNumber=0;
  }

  onBack(){
    this.currentSongNumber=0;
    this.playSongService.stopSong();
  }

  play(songFile: string){
    this.playSongService.playSong(songFile);
  }

  stopSong(){
    this.playSongService.stopSong();
  }

  playAll(){
    this.playSongService.playAllSongs(this.visibleSongs);
  }

  displaySong(songNumber: number){
    this.currentSongNumber=songNumber;
    this.visibleSongs = this.songs.filter(s=>s.includes(songNumber+"-"));
  }

  async setOpen(isOpen: boolean) {

    const userId =  this.authService.user?.uid;
    const userDoc = await this.firestoreService.getUserDocument(userId);
    if (userDoc.exists) {
      const userData = userDoc.data() as any;
      this.songs= userData.songs || [];
      this.songs.forEach(s=>{
        let songNumber= s.split('-');
        if(!this.availableSongButtons.includes(songNumber[0])){
          this.availableSongButtons.push(songNumber[0]);
        }
      })
    }

    this.isModalOpen = isOpen;
  }

}
