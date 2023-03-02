import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCommentsComponent } from './order-comments.component';

describe('OrderCommentsComponent', () => {
  let component: OrderCommentsComponent;
  let fixture: ComponentFixture<OrderCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
