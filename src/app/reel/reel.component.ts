import {
  Component,
  Input,
  OnInit,
  ElementRef,
  OnChanges,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import shuffle from '../utils/shuffle';
@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.scss'],
})
export class ReelComponent implements OnInit, OnChanges {
  @Input() symbols: string[] = [];
  @Input() isSpinning: boolean = false;
  @Output() spinFinishedEvent: EventEmitter<boolean> = new EventEmitter();

  symbolsReel: string[] = [];
  isFirstSpin: boolean = true;

  constructor() {}

  initReel() {
    shuffle(this.symbols);
    this.symbolsReel = [];
    for (let i = 0; i < 18; i++) {
      this.symbolsReel = [...this.symbolsReel, ...this.symbols];
    }
  }

  ngOnInit(): void {
    this.initReel();
  }

  ngOnChanges(changes: any): void {
    if (changes.isSpinning.currentValue === true) {
      if (this.isFirstSpin) {
        this.isFirstSpin = false;
      } else {
        this.reelElement.nativeElement.style.transition = 'none';
        this.reelElement.nativeElement.style.transform =
          'translate3d(0px, 0px, 0px)';
        this.initReel();
      }
      this.animateReel();
    }
  }

  animateReel(): void {
    var reelHeight =
      this.reelElement.nativeElement.scrollHeight -
      this.reelElement.nativeElement.offsetHeight;
    const randomTime = Math.floor(Math.random() * (9 - 5) + 5);

    const intrvalId = setInterval(() => {
      this.spinFinishedEvent.emit();
      clearInterval(intrvalId);
    }, randomTime * 1000);

    // this.reelElement.nativeElement.addEventListener('transitionend', () => {
    //   this.spinFinishedEvent.emit();
    // });

    this.reelElement.nativeElement.style.transition =
      'all ' + randomTime + 's ease 0s';
    this.reelElement.nativeElement.style.transform =
      'translate3d(0px, ' + -1 * reelHeight + 'px' + ', 0px)';
  }

  @ViewChild('reelElement')
  reelElement!: ElementRef;
}
