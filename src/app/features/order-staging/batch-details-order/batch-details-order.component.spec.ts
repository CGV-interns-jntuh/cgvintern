import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchDetailsOrderComponent } from './batch-details-order.component';

describe('BatchDetailsOrderComponent', () => {
  let component: BatchDetailsOrderComponent;
  let fixture: ComponentFixture<BatchDetailsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchDetailsOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchDetailsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
