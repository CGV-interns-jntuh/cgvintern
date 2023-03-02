import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtlBatchDetailsComponent } from './ltl-batch-details.component';

describe('LtlBatchDetailsComponent', () => {
  let component: LtlBatchDetailsComponent;
  let fixture: ComponentFixture<LtlBatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtlBatchDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtlBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
