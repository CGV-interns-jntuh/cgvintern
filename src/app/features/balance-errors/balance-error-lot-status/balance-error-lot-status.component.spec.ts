import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceErrorLotStatusComponent } from './balance-error-lot-status.component';

describe('BalanceErrorLotStatusComponent', () => {
  let component: BalanceErrorLotStatusComponent;
  let fixture: ComponentFixture<BalanceErrorLotStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceErrorLotStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceErrorLotStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
