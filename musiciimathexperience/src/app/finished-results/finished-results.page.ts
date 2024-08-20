import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProblemResults } from '../sharedModels/problem-results.model';
import { IonButton, IonLabel } from "@ionic/angular/standalone";
import { AuthService } from '../auth.service';
import { ViewDidEnter } from '@ionic/angular';
import { FirestoreService } from '../firestore.service';
import { CommonModule } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';

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
  private audio: HTMLAudioElement;

  constructor(private firestoreService:FirestoreService,
    private route: ActivatedRoute, private router: Router,
    private authService: AuthService, private storage: AngularFireStorage) {
   }

  async ionViewDidEnter(): Promise<void> {
    this.correctAnswers=this.route.snapshot.paramMap.get('correctAnswers');
    this.wrongAnswers= this.route.snapshot.paramMap.get('wrongAnswers');
    this.songFile = this.route.snapshot.paramMap.get('songFile');
    this.level = this.route.snapshot.paramMap.get('level');
    const songFileSplit = this.songFile.split("-");
    this.songPieceNumber=songFileSplit[1];
    this.songNumber =songFileSplit[0];
    this.totalAnswers = Number(this.correctAnswers) + Number(this.wrongAnswers);

    if(this.wrongAnswers === "0"){
      let filePath = "Song"+ this.songNumber +"/"+this.songNumber+'-'+this.songPieceNumber+'.mp3';
      this.storage.ref(filePath).getDownloadURL().subscribe(
        (url) => {
          this.audio = new Audio(url);
          console.log("Audio: ",this.audio);
        },
        (error) => {
          console.error('Error getting download URL', error);
        }
      );
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
