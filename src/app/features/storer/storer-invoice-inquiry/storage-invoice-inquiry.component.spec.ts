import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorerInvoiceInquiryComponent } from './storage-invoice-inquiry.component';



describe('StorerInvoiceInquiryComponent', () => {
  let component: StorerInvoiceInquiryComponent;
  let fixture: ComponentFixture<StorerInvoiceInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerInvoiceInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerInvoiceInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
