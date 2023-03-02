import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailSplitLineComponent } from './order-detail-split-line.component';

describe('OrderDetailSplitLineComponent', () => {
  let component: OrderDetailSplitLineComponent;
  let fixture: ComponentFixture<OrderDetailSplitLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailSplitLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailSplitLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
