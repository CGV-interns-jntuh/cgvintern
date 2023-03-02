import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllBatchFileConstraintsComponent } from './controll-batch-file-constraints.component';

describe('ControllBatchFileConstraintsComponent', () => {
  let component: ControllBatchFileConstraintsComponent;
  let fixture: ComponentFixture<ControllBatchFileConstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllBatchFileConstraintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllBatchFileConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
