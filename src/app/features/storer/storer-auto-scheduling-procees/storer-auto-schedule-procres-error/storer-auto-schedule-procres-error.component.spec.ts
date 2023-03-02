import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerAutoScheduleProcresErrorComponent } from './storer-auto-schedule-procres-error.component';

describe('StorerAutoScheduleProcresErrorComponent', () => {
  let component: StorerAutoScheduleProcresErrorComponent;
  let fixture: ComponentFixture<StorerAutoScheduleProcresErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerAutoScheduleProcresErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerAutoScheduleProcresErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
