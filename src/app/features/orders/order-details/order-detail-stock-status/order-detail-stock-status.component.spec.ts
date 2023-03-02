import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailStockStatusComponent } from './order-detail-stock-status.component';

describe('OrderDetailStockStatusComponent', () => {
  let component: OrderDetailStockStatusComponent;
  let fixture: ComponentFixture<OrderDetailStockStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailStockStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailStockStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
