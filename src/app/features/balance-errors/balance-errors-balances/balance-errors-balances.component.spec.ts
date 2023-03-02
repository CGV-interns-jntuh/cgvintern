import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceErrorsBalancesComponent } from './balance-errors-balances.component';

describe('BalanceErrorsBalancesComponent', () => {
  let component: BalanceErrorsBalancesComponent;
  let fixture: ComponentFixture<BalanceErrorsBalancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceErrorsBalancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceErrorsBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
