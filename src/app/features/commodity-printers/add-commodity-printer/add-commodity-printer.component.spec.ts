import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommodityPrinterComponent } from './add-commodity-printer.component';

describe('AddCommodityPrinterComponent', () => {
  let component: AddCommodityPrinterComponent;
  let fixture: ComponentFixture<AddCommodityPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommodityPrinterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCommodityPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
