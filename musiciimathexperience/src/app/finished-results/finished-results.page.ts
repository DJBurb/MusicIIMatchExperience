import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProblemResults } from '../sharedModels/problem-results.model';
import { IonButton, IonLabel } from "@ionic/angular/standalone";
import { AuthService } from '../auth.service';
import { ViewDidEnter } from '@ionic/angular';
import { FirestoreService } from '../firestore.service';
import { CommonModule } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { PlaySongService } from '../play-song.service';

@Component({
  selector: 'app-finished-results',
  templateUrl: './finished-results.page.html',
  styleUrls: ['./finished-results.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, CommonModule]
})

export class FinishedResultsPage implements ViewDidEnter {
  //results: ProblemResults;
  correctAnswers: string;
  wrongAnswers: string;
  songFile: string;
  songNumber: string;
  level: string;
  songPieceNumber: string;
  totalAnswers: number;
  showSongAdded: boolean;

  constructor(private firestoreService:FirestoreService,
    private route: ActivatedRoute, private router: Router,
    private authService: AuthService, private storage: AngularFireStorage, private playSongService: PlaySongService) {
   }

  async ionViewDidEnter(): Promise<void> {
    this.correctAnswers=this.route.snapshot.paramMap.get('correctAnswers');
    this.wrongAnswers= this.route.snapshot.paramMap.get('wrongAnswers');
    this.songFile = this.route.snapshot.paramMap.get('songFile');
    this.level = this.route.snapshot.paramMap.get('level');
    this.totalAnswers = Number(this.correctAnswers) + Number(this.wrongAnswers);

    if(this.wrongAnswers === "0"){
      const userId =  this.authService.user?.uid;
      if (userId) {
        await this.checkAndAddSong(userId, this.songFile);
      }
    }
  }

  goToLevelSkillsMenu(){
    this.router.navigate(['level-'+this.level+'-skills']);
  }

  playSong(){
    this.playSongService.playSong(this.songFile);
  }

  stopSong() {
    this.playSongService.stopSong();
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
