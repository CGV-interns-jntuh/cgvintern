import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtlBatchChangeComponent } from './ltl-batch-change.component';

describe('LtlBatchChangeComponent', () => {
  let component: LtlBatchChangeComponent;
  let fixture: ComponentFixture<LtlBatchChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtlBatchChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtlBatchChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
