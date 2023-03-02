import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailMoveQueueComponent } from './order-detail-move-queue.component';

describe('OrderDetailMoveQueueComponent', () => {
  let component: OrderDetailMoveQueueComponent;
  let fixture: ComponentFixture<OrderDetailMoveQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailMoveQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailMoveQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
