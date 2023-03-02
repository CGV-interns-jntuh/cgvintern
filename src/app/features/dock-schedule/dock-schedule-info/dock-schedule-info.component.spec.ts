import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockScheduleInfoComponent } from './dock-schedule-info.component';

describe('DockScheduleInfoComponent', () => {
  let component: DockScheduleInfoComponent;
  let fixture: ComponentFixture<DockScheduleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockScheduleInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockScheduleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
