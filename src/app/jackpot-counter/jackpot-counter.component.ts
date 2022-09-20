import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-jackpot-counter',
  templateUrl: './jackpot-counter.component.html',
  styleUrls: ['./jackpot-counter.component.scss'],
})
export class JackpotCounterComponent implements OnInit, OnDestroy {
  @Input() jackpotAmount: number = 0;
  counter: number = 0;
  counterId: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.jackpotAmount) {
      this.counterId = window.setInterval(() => {
        this.counter++;

        if (this.counter === this.jackpotAmount) {
          clearInterval(this.counterId);
        }
      }, 1);
    }
  }

  ngOnDestroy() {
    if (this.counterId) {
      clearInterval(this.counterId);
    }
  }
}
