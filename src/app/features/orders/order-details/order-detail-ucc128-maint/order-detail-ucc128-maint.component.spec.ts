import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailUcc128MaintComponent } from './order-detail-ucc128-maint.component';

describe('OrderDetailUcc128MaintComponent', () => {
  let component: OrderDetailUcc128MaintComponent;
  let fixture: ComponentFixture<OrderDetailUcc128MaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailUcc128MaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailUcc128MaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
