import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyInquiryComponent } from './tally-inquiry.component';

describe('TallyInquiryComponent', () => {
  let component: TallyInquiryComponent;
  let fixture: ComponentFixture<TallyInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallyInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
