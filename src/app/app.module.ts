import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MusicButtonComponent } from './music-button/music-button.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlotComponent } from './slot/slot.component';
import { JackpotCounterComponent } from './jackpot-counter/jackpot-counter.component';
import { SlotPageComponent } from './slot-page/slot-page.component';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { SlotMachineComponent } from './slot-machine/slot-machine.component';
import { ReelComponent } from './reel/reel.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicButtonComponent,
    CarouselComponent,
    SlotComponent,
    JackpotCounterComponent,
    SlotPageComponent,
    LobbyPageComponent,
    SlotMachineComponent,
    ReelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
