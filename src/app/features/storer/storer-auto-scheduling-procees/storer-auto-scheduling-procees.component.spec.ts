import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerAutoSchedulingProceesComponent } from './storer-auto-scheduling-procees.component';

describe('StorerAutoSchedulingProceesComponent', () => {
  let component: StorerAutoSchedulingProceesComponent;
  let fixture: ComponentFixture<StorerAutoSchedulingProceesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerAutoSchedulingProceesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerAutoSchedulingProceesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
