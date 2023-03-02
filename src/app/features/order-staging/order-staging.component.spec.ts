import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStagingComponent } from './order-staging.component';

describe('OrderStagingComponent', () => {
  let component: OrderStagingComponent;
  let fixture: ComponentFixture<OrderStagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderStagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
