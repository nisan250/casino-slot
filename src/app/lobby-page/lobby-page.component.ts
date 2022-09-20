import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IData, ISlot } from '../models/index.model';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.scss'],
})
export class LobbyPageComponent implements OnInit {
  backgroundMusicUrl = '';
  backgroundImage = '';
  slots: ISlot[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.http
      .get(
        'https://s3cdn.babawildslots.com/uploadImages/home-assignment-data.json'
      )
      .subscribe((data: any) => {
        this.backgroundImage = data.backgroundImage;
        this.slots = data.slots.sort((a: ISlot, b: ISlot) => a.order - b.order);
        this.backgroundMusicUrl = data.backgroundMusic;
        data.slots.map((a: ISlot) => a);
      });
  }
}
