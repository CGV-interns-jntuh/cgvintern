import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesEventInquiryComponent } from './ww-boxes-event-inquiry.component';

describe('WwBoxesEventInquiryComponent', () => {
  let component: WwBoxesEventInquiryComponent;
  let fixture: ComponentFixture<WwBoxesEventInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesEventInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesEventInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
