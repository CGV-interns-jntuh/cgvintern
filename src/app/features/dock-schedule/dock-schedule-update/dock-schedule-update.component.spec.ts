import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockScheduleUpdateComponent } from './dock-schedule-update.component';

describe('DockScheduleUpdateComponent', () => {
  let component: DockScheduleUpdateComponent;
  let fixture: ComponentFixture<DockScheduleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockScheduleUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockScheduleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
