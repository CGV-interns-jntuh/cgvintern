import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailCutComponent } from './order-detail-cut.component';

describe('OrderDetailCutComponent', () => {
  let component: OrderDetailCutComponent;
  let fixture: ComponentFixture<OrderDetailCutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailCutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
