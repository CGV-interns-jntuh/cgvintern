import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerAccessInvoiceEnquiryComponent } from './storer-access-invoice-enquiry.component';

describe('StorerAccessInvoiceEnquiryComponent', () => {
  let component: StorerAccessInvoiceEnquiryComponent;
  let fixture: ComponentFixture<StorerAccessInvoiceEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerAccessInvoiceEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerAccessInvoiceEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
