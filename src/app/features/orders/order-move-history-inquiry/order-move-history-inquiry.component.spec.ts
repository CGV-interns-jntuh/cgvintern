import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMoveHistoryInquiryComponent } from './order-move-history-inquiry.component';

describe('OrderMoveHistoryInquiryComponent', () => {
  let component: OrderMoveHistoryInquiryComponent;
  let fixture: ComponentFixture<OrderMoveHistoryInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMoveHistoryInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderMoveHistoryInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
