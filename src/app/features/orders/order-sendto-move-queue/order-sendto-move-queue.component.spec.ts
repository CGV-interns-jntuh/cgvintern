import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSendtoMoveQueueComponent } from './order-sendto-move-queue.component';

describe('OrderSendtoMoveQueueComponent', () => {
  let component: OrderSendtoMoveQueueComponent;
  let fixture: ComponentFixture<OrderSendtoMoveQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSendtoMoveQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSendtoMoveQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
