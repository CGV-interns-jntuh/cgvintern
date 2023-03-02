import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SroterWriteBalanceRecordComponent } from './sroter-write-balance-record.component';

describe('SroterWriteBalanceRecordComponent', () => {
  let component: SroterWriteBalanceRecordComponent;
  let fixture: ComponentFixture<SroterWriteBalanceRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SroterWriteBalanceRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SroterWriteBalanceRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
