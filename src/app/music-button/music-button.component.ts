import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-music-button',
  templateUrl: './music-button.component.html',
  styleUrls: ['./music-button.component.scss'],
})
export class MusicButtonComponent implements OnChanges {
  audioObject: HTMLAudioElement = new Audio();

  constructor() {}
  
  @Input() backgroundMusicUrl: string = '';

  ngOnChanges() {
    this.audioObject.src = this.backgroundMusicUrl;
    this.audioObject.load();
    this.audioObject.muted = true;
  }

  toggleMusic() {
    !this.audioObject.muted
      ? (this.audioObject.muted = true)
      : (this.audioObject.muted = false);

    if (this.audioObject.paused) {
      this.audioObject.muted = false;
      this.audioObject.play();
    }
  }
}
