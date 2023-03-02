import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdjustmentInquiryComponent } from './item-adjustment-inquiry.component';

describe('ItemAdjustmentInquiryComponent', () => {
  let component: ItemAdjustmentInquiryComponent;
  let fixture: ComponentFixture<ItemAdjustmentInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAdjustmentInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAdjustmentInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
