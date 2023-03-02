import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesInquiryComponent } from './ww-boxes-inquiry.component';

describe('WwBoxesInquiryComponent', () => {
  let component: WwBoxesInquiryComponent;
  let fixture: ComponentFixture<WwBoxesInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
