import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAdjustmentComponent } from './side-adjustment.component';

describe('SideAdjustmentComponent', () => {
  let component: SideAdjustmentComponent;
  let fixture: ComponentFixture<SideAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideAdjustmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
