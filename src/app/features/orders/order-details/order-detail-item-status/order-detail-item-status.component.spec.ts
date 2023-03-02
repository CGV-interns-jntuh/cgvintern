import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailItemStatusComponent } from './order-detail-item-status.component';

describe('OrderDetailItemStatusComponent', () => {
  let component: OrderDetailItemStatusComponent;
  let fixture: ComponentFixture<OrderDetailItemStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailItemStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailItemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
