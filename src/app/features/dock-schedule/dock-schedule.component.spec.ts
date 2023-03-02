import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockScheduleComponent } from './dock-schedule.component';

describe('DockScheduleComponent', () => {
  let component: DockScheduleComponent;
  let fixture: ComponentFixture<DockScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
