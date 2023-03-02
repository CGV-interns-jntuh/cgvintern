import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveQueueEntryInquiryComponent } from './move-queue-entry-inquiry.component';

describe('MoveQueueEntryInquiryComponent', () => {
  let component: MoveQueueEntryInquiryComponent;
  let fixture: ComponentFixture<MoveQueueEntryInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveQueueEntryInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveQueueEntryInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
