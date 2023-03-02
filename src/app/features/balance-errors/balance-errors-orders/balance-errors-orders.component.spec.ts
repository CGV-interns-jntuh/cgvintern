import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceErrorsOrdersComponent } from './balance-errors-orders.component';

describe('BalanceErrorsOrdersComponent', () => {
  let component: BalanceErrorsOrdersComponent;
  let fixture: ComponentFixture<BalanceErrorsOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceErrorsOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceErrorsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
