import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithDockSchedularComponent } from './work-with-dock-schedular.component';

describe('WorkWithDockSchedularComponent', () => {
  let component: WorkWithDockSchedularComponent;
  let fixture: ComponentFixture<WorkWithDockSchedularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithDockSchedularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkWithDockSchedularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
