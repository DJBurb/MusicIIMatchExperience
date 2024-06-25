import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProblemResults } from '../sharedModels/problem-results.model';
import { IonButton } from "@ionic/angular/standalone";
import { ResultsComponent } from '../results/results.component';
import { AuthService } from '../auth.service';
import { ViewDidEnter } from '@ionic/angular';
import { FirestoreService } from '../firestore.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finished-results',
  templateUrl: './finished-results.page.html',
  styleUrls: ['./finished-results.page.scss'],
  standalone: true,
  imports: [IonButton, ResultsComponent, CommonModule]
})

export class FinishedResultsPage implements ViewDidEnter {
  results: ProblemResults;
  songNumber: string;
  songPieceNumber: string;
  showSongAdded: boolean;
  private audio: HTMLAudioElement;

  constructor(private firestoreService:FirestoreService,private route: ActivatedRoute, private router: Router, private authService: AuthService) {
   }

  ionViewDidEnter(): void {
    this.route.params.subscribe(async (params: Params) =>{
      this.results = params as ProblemResults;
      const wrongAnswers= Number(this.results.wrongAnswers);
      const songFileSplit = this.results.songFile.split("-");
      this.songPieceNumber=songFileSplit[0];
      this.songNumber =songFileSplit[1];
      this.audio = new Audio('https://firebasestorage.googleapis.com/v0/b/math2musicexperience.appspot.com/o/Song%20'+this.songNumber+'%2F'+this.songNumber+'-'+this.songPieceNumber+'.mp3?alt=media');
      if(wrongAnswers === 0){
        const userId =  this.authService.user?.uid;
        if (userId) {
          await this.checkAndAddSong(userId, this.results.songFile);
        }
      }
    } );
  }

  goToLevelSkillsMenu(){
    this.router.navigate(['level-'+this.results.level+'-skills']);
  }

  playSong(){
    this.audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }

  stopSong() {
    this.audio.pause();
    this.audio.currentTime = 0; // Reset to beginning
  }

  async checkAndAddSong(uid: string, songFileName: string): Promise<void> {
    try {
      const userDoc = await this.firestoreService.getUserDocument(uid);
      if (userDoc.exists) {
        const userData = userDoc.data() as any;
        const songs: string[] = userData.songs || [];
        if (!songs.includes(songFileName)) {
          songs.push(songFileName);
          await this.firestoreService.updateUserSongs(uid, songs);
          this.showSongAdded =true;
        } else {
          console.log(`Song already exists: ${songFileName}`);
        }
      } else {
        await this.firestoreService.createUserDocument(uid, [songFileName]);
        this.showSongAdded =true;
      }
    } catch (error) {
      console.error('Error accessing user document:', error);
    }
  }

}
