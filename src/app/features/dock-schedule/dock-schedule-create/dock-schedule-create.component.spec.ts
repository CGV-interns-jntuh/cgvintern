import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockScheduleCreateComponent } from './dock-schedule-create.component';

describe('DockScheduleCreateComponent', () => {
  let component: DockScheduleCreateComponent;
  let fixture: ComponentFixture<DockScheduleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockScheduleCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockScheduleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
