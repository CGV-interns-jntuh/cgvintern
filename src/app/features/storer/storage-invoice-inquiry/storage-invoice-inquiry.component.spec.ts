import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageInvoiceInquiryComponent } from './storage-invoice-inquiry.component';

describe('StorageInvoiceInquiryComponent', () => {
  let component: StorageInvoiceInquiryComponent;
  let fixture: ComponentFixture<StorageInvoiceInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageInvoiceInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorageInvoiceInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
