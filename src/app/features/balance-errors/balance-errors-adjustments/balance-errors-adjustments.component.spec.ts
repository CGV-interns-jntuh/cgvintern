import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceErrorsAdjustmentsComponent } from './balance-errors-adjustments.component';

describe('BalanceErrorsAdjustmentsComponent', () => {
  let component: BalanceErrorsAdjustmentsComponent;
  let fixture: ComponentFixture<BalanceErrorsAdjustmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceErrorsAdjustmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceErrorsAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
