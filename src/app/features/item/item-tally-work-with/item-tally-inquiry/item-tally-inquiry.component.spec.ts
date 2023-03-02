import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTallyInquiryComponent } from './item-tally-inquiry.component';

describe('ItemTallyInquiryComponent', () => {
  let component: ItemTallyInquiryComponent;
  let fixture: ComponentFixture<ItemTallyInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTallyInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTallyInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
