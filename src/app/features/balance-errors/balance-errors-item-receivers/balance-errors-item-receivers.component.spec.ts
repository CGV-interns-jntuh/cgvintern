import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceErrorsItemReceiversComponent } from './balance-errors-item-receivers.component';

describe('BalanceErrorsItemReceiversComponent', () => {
  let component: BalanceErrorsItemReceiversComponent;
  let fixture: ComponentFixture<BalanceErrorsItemReceiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceErrorsItemReceiversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceErrorsItemReceiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
