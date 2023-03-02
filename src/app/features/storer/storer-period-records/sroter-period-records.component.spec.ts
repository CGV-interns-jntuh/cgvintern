import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SroterPeriodRecordsComponent } from './sroter-period-records.component';

describe('SroterPeriodRecordsComponent', () => {
  let component: SroterPeriodRecordsComponent;
  let fixture: ComponentFixture<SroterPeriodRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SroterPeriodRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SroterPeriodRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
