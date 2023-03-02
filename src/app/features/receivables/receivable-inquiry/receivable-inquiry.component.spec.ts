import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivableInquiryComponent } from './receivable-inquiry.component';

describe('ReceivableInquiryComponent', () => {
  let component: ReceivableInquiryComponent;
  let fixture: ComponentFixture<ReceivableInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivableInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivableInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
