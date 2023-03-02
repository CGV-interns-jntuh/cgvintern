import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailCrossDocRefComponent } from './order-detail-cross-doc-ref.component';

describe('OrderDetailCrossDocRefComponent', () => {
  let component: OrderDetailCrossDocRefComponent;
  let fixture: ComponentFixture<OrderDetailCrossDocRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailCrossDocRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailCrossDocRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
