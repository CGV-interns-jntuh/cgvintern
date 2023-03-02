import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithBoxesComponent } from './work-with-boxes.component';

describe('WorkWithBoxesComponent', () => {
  let component: WorkWithBoxesComponent;
  let fixture: ComponentFixture<WorkWithBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkWithBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
