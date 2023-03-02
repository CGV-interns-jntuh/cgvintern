import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerArAgingInquiryComponent } from './storer-ar-aging-inquiry.component';

describe('StorerArAgingInquiryComponent', () => {
  let component: StorerArAgingInquiryComponent;
  let fixture: ComponentFixture<StorerArAgingInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerArAgingInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerArAgingInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
