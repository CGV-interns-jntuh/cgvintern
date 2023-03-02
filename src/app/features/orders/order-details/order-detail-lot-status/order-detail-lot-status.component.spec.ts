import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailLotStatusComponent } from './order-detail-lot-status.component';

describe('OrderDetailLotStatusComponent', () => {
  let component: OrderDetailLotStatusComponent;
  let fixture: ComponentFixture<OrderDetailLotStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailLotStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailLotStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
