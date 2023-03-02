import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEventHistoryComponent } from './order-event-history.component';

describe('OrderEventHistoryComponent', () => {
  let component: OrderEventHistoryComponent;
  let fixture: ComponentFixture<OrderEventHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEventHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderEventHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
