import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockScheduleMarkHotComponent } from './dock-schedule-mark-hot.component';

describe('DockScheduleMarkHotComponent', () => {
  let component: DockScheduleMarkHotComponent;
  let fixture: ComponentFixture<DockScheduleMarkHotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockScheduleMarkHotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockScheduleMarkHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
