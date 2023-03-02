import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSideAdjustmentComponent } from './two-side-adjustment.component';

describe('TwoSideAdjustmentComponent', () => {
  let component: TwoSideAdjustmentComponent;
  let fixture: ComponentFixture<TwoSideAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoSideAdjustmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoSideAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
