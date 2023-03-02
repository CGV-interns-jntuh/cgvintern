import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInquiryComponent } from './content-inquiry.component';

describe('ContentInquiryComponent', () => {
  let component: ContentInquiryComponent;
  let fixture: ComponentFixture<ContentInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
