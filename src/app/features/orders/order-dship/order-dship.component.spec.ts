import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDshipComponent } from './order-dship.component';

describe('OrderDshipComponent', () => {
  let component: OrderDshipComponent;
  let fixture: ComponentFixture<OrderDshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
