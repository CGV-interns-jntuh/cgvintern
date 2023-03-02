import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllBatchFileComponent } from './controll-batch-file.component';

describe('ControllBatchFileComponent', () => {
  let component: ControllBatchFileComponent;
  let fixture: ComponentFixture<ControllBatchFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllBatchFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllBatchFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
