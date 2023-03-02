import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBookTagInquiryComponent } from './ww-book-tag-inquiry.component';

describe('WwBookTagInquiryComponent', () => {
  let component: WwBookTagInquiryComponent;
  let fixture: ComponentFixture<WwBookTagInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBookTagInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBookTagInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
