import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivableAdjustInvoiceComponent } from './receivable-adjust-invoice.component';

describe('ReceivableAdjustInvoiceComponent', () => {
  let component: ReceivableAdjustInvoiceComponent;
  let fixture: ComponentFixture<ReceivableAdjustInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivableAdjustInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivableAdjustInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
