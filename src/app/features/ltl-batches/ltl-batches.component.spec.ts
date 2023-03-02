import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtlBatchesComponent } from './ltl-batches.component';

describe('LtlBatchesComponent', () => {
  let component: LtlBatchesComponent;
  let fixture: ComponentFixture<LtlBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtlBatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtlBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
