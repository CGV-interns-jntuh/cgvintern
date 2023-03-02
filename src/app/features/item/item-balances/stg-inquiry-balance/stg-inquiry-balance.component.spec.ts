import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StgInquiryBalanceComponent } from './stg-inquiry-balance.component';

describe('StgInquiryBalanceComponent', () => {
  let component: StgInquiryBalanceComponent;
  let fixture: ComponentFixture<StgInquiryBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StgInquiryBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StgInquiryBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
