import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderChangeLocLotComponent } from './order-change-loc-lot.component';

describe('OrderChangeLocLotComponent', () => {
  let component: OrderChangeLocLotComponent;
  let fixture: ComponentFixture<OrderChangeLocLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderChangeLocLotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderChangeLocLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
