import { Component } from '@angular/core';

@Component({
  selector: 'app-slot-machine',
  templateUrl: './slot-machine.component.html',
  styleUrls: ['./slot-machine.component.scss'],
})
export class SlotMachineComponent {
  isSpinning: boolean = false;
  reelSpinFinishedCounter: number = 0;

  symbols = {
    1: './../../assets/slot-1128/symbol_1.png',
    2: './../../assets/slot-1128/symbol_2.png',
    3: './../../assets/slot-1128/symbol_3.png',
    4: './../../assets/slot-1128/symbol_4.png',
    5: './../../assets/slot-1128/symbol_5.png',
    6: './../../assets/slot-1128/symbol_6.png',
    7: './../../assets/slot-1128/symbol_7.png',
    8: './../../assets/slot-1128/symbol_8.png',
    9: './../../assets/slot-1128/symbol_9.png',
    10: './../../assets/slot-1128/symbol_10.png',
    11: './../../assets/slot-1128/symbol_11.png',
    12: './../../assets/slot-1128/symbol_12.png',
  };

  constructor() {}

  spinReels() {
    this.isSpinning = true;
  }

  onSpinFinished() {
    this.reelSpinFinishedCounter++;

    if (this.reelSpinFinishedCounter === 5) {
      this.isSpinning = false;
      this.reelSpinFinishedCounter = 0;
    }
  }
}
