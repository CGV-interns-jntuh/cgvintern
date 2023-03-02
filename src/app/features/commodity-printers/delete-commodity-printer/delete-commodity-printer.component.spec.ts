import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCommodityPrinterComponent } from './delete-commodity-printer.component';

describe('DeleteCommodityPrinterComponent', () => {
  let component: DeleteCommodityPrinterComponent;
  let fixture: ComponentFixture<DeleteCommodityPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCommodityPrinterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCommodityPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
