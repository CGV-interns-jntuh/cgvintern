import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerRecIvcInquiryComponent } from './storer-rec-ivc-inquiry.component';

describe('StorerRecIvcInquiryComponent', () => {
  let component: StorerRecIvcInquiryComponent;
  let fixture: ComponentFixture<StorerRecIvcInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerRecIvcInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerRecIvcInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
