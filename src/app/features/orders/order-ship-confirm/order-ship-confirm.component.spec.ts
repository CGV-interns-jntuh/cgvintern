import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderShipConfirmComponent } from './order-ship-confirm.component';

describe('OrderShipConfirmComponent', () => {
  let component: OrderShipConfirmComponent;
  let fixture: ComponentFixture<OrderShipConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderShipConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderShipConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
