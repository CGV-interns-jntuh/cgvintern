import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailCommentsComponent } from './order-detail-comments.component';

describe('OrderDetailCommentsComponent', () => {
  let component: OrderDetailCommentsComponent;
  let fixture: ComponentFixture<OrderDetailCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
