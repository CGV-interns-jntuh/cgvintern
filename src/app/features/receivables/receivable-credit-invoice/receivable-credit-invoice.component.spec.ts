import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivableCreditInvoiceComponent } from './receivable-credit-invoice.component';

describe('ReceivableCreditInvoiceComponent', () => {
  let component: ReceivableCreditInvoiceComponent;
  let fixture: ComponentFixture<ReceivableCreditInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivableCreditInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivableCreditInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
