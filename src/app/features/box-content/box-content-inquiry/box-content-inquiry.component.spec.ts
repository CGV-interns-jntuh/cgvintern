import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentInquiryComponent } from './box-content-inquiry.component';

describe('BoxContentInquiryComponent', () => {
  let component: BoxContentInquiryComponent;
  let fixture: ComponentFixture<BoxContentInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContentInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
