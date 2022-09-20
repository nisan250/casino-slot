import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelComponent } from './reel.component';

describe('ReelComponent', () => {
  let component: ReelComponent;
  let fixture: ComponentFixture<ReelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
