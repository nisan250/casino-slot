import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotCounterComponent } from './jackpot-counter.component';

describe('JackpotCounterComponent', () => {
  let component: JackpotCounterComponent;
  let fixture: ComponentFixture<JackpotCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackpotCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JackpotCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
