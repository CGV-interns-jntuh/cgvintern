import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailChangeEventComponent } from './order-detail-change-event.component';

describe('OrderDetailChangeEventComponent', () => {
  let component: OrderDetailChangeEventComponent;
  let fixture: ComponentFixture<OrderDetailChangeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailChangeEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailChangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
