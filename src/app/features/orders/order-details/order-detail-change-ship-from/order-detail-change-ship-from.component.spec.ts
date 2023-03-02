import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailChangeShipFromComponent } from './order-detail-change-ship-from.component';

describe('OrderDetailChangeShipFromComponent', () => {
  let component: OrderDetailChangeShipFromComponent;
  let fixture: ComponentFixture<OrderDetailChangeShipFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailChangeShipFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailChangeShipFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
