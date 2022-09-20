import { Component, Input, OnChanges } from '@angular/core';
import { ISlot } from './../models/index.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnChanges {
  @Input() slots: ISlot[] = [];

  showLeftArrow: boolean = false;
  showRightArrow: boolean = true;
  displayedSetTotalArr: number[] = [];
  currentDisplayedSet: number = 1;
  displayedSetTotal: number = 1;
  slotsPerView = 4;
  slotSize = 14;
  maxPositionXLength: number = 0;
  minPositionXLength: number = 0;
  positionX: number = 0;

  constructor() {}

  ngOnChanges(): void {
    // Test
    // this.slots.push({
    //   id: 2234,
    //   image:
    //     'https://s3cdn.babawildslots.com/common/master/assets/images/mainLobby/slotsIcons/icon_1152.png',
    //   isLocked: false,
    //   name: 'Grand Gorilla',
    //   order: 9,
    // });

    this.maxPositionXLength =
      -1 * (this.slots.length - this.slotsPerView) * this.slotSize;
    if (this.slots.length % this.slotsPerView === 0) {
      this.displayedSetTotal = this.slots.length / this.slotsPerView;
    } else {
      this.displayedSetTotal = Math.ceil(this.slots.length / this.slotsPerView);
    }

    this.displayedSetTotalArr = Array(this.displayedSetTotal)
      .fill('')
      .map((x, i) => i + 1);
  }

  setCarousel(selectedDisplaySet: number) {
    if (selectedDisplaySet === 1) {
      this.currentDisplayedSet = selectedDisplaySet;
      this.positionX = this.minPositionXLength;
      this.showLeftArrow = false;
      this.showRightArrow = true;
      return;
    }

    if (selectedDisplaySet === this.displayedSetTotal) {
      this.currentDisplayedSet = selectedDisplaySet;
      this.positionX = this.maxPositionXLength;
      this.showLeftArrow = true;
      this.showRightArrow = false;
      return;
    }

    if (selectedDisplaySet < this.currentDisplayedSet) {
      this.positionX = this.positionX + this.slotsPerView * this.slotSize;
    } else {
      this.positionX = this.positionX - this.slotsPerView * this.slotSize;
    }
    this.currentDisplayedSet = selectedDisplaySet;
    this.showLeftArrow = true;
    this.showRightArrow = true;
  }

  showNextSlots() {
    this.currentDisplayedSet++;

    const tempPositionXLength =
      this.positionX - this.slotSize * this.slotsPerView;

    if (tempPositionXLength <= this.maxPositionXLength) {
      this.showRightArrow = false;
      this.positionX = this.maxPositionXLength;
    } else {
      this.positionX = tempPositionXLength;
    }

    this.showLeftArrow = true;
  }

  showPreviousSlots() {
    this.currentDisplayedSet--;

    const tempPositionXLength =
      this.positionX + this.slotSize * this.slotsPerView;

    if (tempPositionXLength >= this.minPositionXLength) {
      this.showLeftArrow = false;
      this.positionX = this.minPositionXLength;
    } else {
      this.positionX = tempPositionXLength;
    }

    this.showRightArrow = true;
  }
}
