import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerDailyStatusComponent } from './storer-daily-status.component';

describe('StorerDailyStatusComponent', () => {
  let component: StorerDailyStatusComponent;
  let fixture: ComponentFixture<StorerDailyStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerDailyStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerDailyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
