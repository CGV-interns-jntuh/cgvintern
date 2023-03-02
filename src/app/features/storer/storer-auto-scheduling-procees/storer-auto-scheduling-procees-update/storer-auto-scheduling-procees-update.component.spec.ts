import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerAutoSchedulingProceesUpdateComponent } from './storer-auto-scheduling-procees-update.component';

describe('StorerAutoSchedulingProceesUpdateComponent', () => {
  let component: StorerAutoSchedulingProceesUpdateComponent;
  let fixture: ComponentFixture<StorerAutoSchedulingProceesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerAutoSchedulingProceesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerAutoSchedulingProceesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
