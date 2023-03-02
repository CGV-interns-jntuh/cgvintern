import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStatusInquiryComponent } from './location-status-inquiry.component';

describe('LocationStatusInquiryComponent', () => {
  let component: LocationStatusInquiryComponent;
  let fixture: ComponentFixture<LocationStatusInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationStatusInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationStatusInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
