import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaySongService {

  audio: HTMLAudioElement;
  audios: HTMLAudioElement[] = [];

  constructor() { }

  playSong(songFile: string) {
    const songFileSplit = songFile.split("-");
    let songPieceNumber = songFileSplit[1];
    let songNumber = songFileSplit[0];
    let filePath = "../assets/music/Song" + songNumber + "/" + songNumber + '-' + songPieceNumber + '.mp3';

    this.stopSong(); // Stop all currently playing songs
    this.audio = new Audio(filePath);
    this.audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }

  stopSong() {
    if (this.audios.length > 0) {
      this.audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
      this.audios = [];
    } else if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  playAllSongs(songFiles: string[]) {
    this.stopSong(); // Stop all currently playing songs
    songFiles.forEach(s => {
      const songFileSplit = s.split("-");
      let songPieceNumber = songFileSplit[1];
      let songNumber = songFileSplit[0];
      let filePath = "../assets/music/Song" + songNumber + "/" + songNumber + '-' + songPieceNumber + '.mp3';

      const newAudio = new Audio(filePath);
      this.audios.push(newAudio);
      newAudio.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    });
  }
}
