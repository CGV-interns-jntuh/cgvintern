import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityPrintersComponent } from './commodity-printers.component';

describe('CommodityPrintersComponent', () => {
  let component: CommodityPrintersComponent;
  let fixture: ComponentFixture<CommodityPrintersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodityPrintersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommodityPrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
