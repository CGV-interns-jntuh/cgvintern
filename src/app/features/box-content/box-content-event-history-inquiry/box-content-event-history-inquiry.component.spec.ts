import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentEventHistoryInquiryComponent } from './box-content-event-history-inquiry.component';

describe('BoxContentEventHistoryInquiryComponent', () => {
  let component: BoxContentEventHistoryInquiryComponent;
  let fixture: ComponentFixture<BoxContentEventHistoryInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentEventHistoryInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContentEventHistoryInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
