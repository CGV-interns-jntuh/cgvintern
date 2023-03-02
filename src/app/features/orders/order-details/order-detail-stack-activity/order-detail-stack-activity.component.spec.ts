import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailStackActivityComponent } from './order-detail-stack-activity.component';

describe('OrderDetailStackActivityComponent', () => {
  let component: OrderDetailStackActivityComponent;
  let fixture: ComponentFixture<OrderDetailStackActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailStackActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailStackActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
