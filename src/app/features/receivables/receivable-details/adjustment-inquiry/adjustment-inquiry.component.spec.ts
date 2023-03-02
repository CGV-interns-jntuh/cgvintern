import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustmentInquiryComponent } from './adjustment-inquiry.component';

describe('AdjustmentInquiryComponent', () => {
  let component: AdjustmentInquiryComponent;
  let fixture: ComponentFixture<AdjustmentInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjustmentInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjustmentInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
