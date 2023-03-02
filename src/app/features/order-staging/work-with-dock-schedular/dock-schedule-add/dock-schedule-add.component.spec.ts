import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockScheduleAddComponent } from './dock-schedule-add.component';

describe('DockScheduleAddComponent', () => {
  let component: DockScheduleAddComponent;
  let fixture: ComponentFixture<DockScheduleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockScheduleAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockScheduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
