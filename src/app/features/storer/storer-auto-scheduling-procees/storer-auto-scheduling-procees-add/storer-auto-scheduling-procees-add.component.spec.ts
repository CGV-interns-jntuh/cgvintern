import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerAutoSchedulingProceesAddComponent } from './storer-auto-scheduling-procees-add.component';

describe('StorerAutoSchedulingProceesAddComponent', () => {
  let component: StorerAutoSchedulingProceesAddComponent;
  let fixture: ComponentFixture<StorerAutoSchedulingProceesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerAutoSchedulingProceesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerAutoSchedulingProceesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
