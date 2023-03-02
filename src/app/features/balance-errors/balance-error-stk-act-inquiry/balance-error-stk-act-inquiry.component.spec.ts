import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceErrorStkActInquiryComponent } from './balance-error-stk-act-inquiry.component';

describe('BalanceErrorStkActInquiryComponent', () => {
  let component: BalanceErrorStkActInquiryComponent;
  let fixture: ComponentFixture<BalanceErrorStkActInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceErrorStkActInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceErrorStkActInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
