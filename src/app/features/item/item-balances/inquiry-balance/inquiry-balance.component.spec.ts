import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryBalanceComponent } from './inquiry-balance.component';

describe('InquiryBalanceComponent', () => {
  let component: InquiryBalanceComponent;
  let fixture: ComponentFixture<InquiryBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquiryBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquiryBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
