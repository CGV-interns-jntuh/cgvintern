import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivableAdjustInquiryComponent } from './receivable-adjust-inquiry.component';

describe('ReceivableAdjustInquiryComponent', () => {
  let component: ReceivableAdjustInquiryComponent;
  let fixture: ComponentFixture<ReceivableAdjustInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivableAdjustInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivableAdjustInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
