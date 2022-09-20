import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISlot } from '../models/index.model';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss'],
})
export class SlotComponent implements OnInit {
  @Input() slot: ISlot = {} as ISlot;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoSlots(slot: ISlot) {
    if (slot.isLocked) return;

    this.router.navigate(['/slots', slot.id]);
  }
}
