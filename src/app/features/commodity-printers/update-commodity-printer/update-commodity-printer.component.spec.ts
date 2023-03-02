import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommodityPrinterComponent } from './update-commodity-printer.component';

describe('UpdateCommodityPrinterComponent', () => {
  let component: UpdateCommodityPrinterComponent;
  let fixture: ComponentFixture<UpdateCommodityPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCommodityPrinterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCommodityPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
