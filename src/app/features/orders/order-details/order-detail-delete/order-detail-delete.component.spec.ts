import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailDeleteComponent } from './order-detail-delete.component';

describe('OrderDetailDeleteComponent', () => {
  let component: OrderDetailDeleteComponent;
  let fixture: ComponentFixture<OrderDetailDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
