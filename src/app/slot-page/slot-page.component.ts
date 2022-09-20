import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-slot-page',
  templateUrl: './slot-page.component.html',
  styleUrls: ['./slot-page.component.scss'],
})
export class SlotPageComponent implements OnInit {
  private history: string[] = [];
  isSlotEmpty: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit(): void {
    const slotId = this.route.snapshot.paramMap.get('id');
    if (slotId !== '1128') this.isSlotEmpty = true;
  }

  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
