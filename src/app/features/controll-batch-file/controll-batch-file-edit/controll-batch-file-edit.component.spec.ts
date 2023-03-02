import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllBatchFileEditComponent } from './controll-batch-file-edit.component';

describe('ControllBatchFileEditComponent', () => {
  let component: ControllBatchFileEditComponent;
  let fixture: ComponentFixture<ControllBatchFileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllBatchFileEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllBatchFileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
