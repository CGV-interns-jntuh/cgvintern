import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllBatchFileDeleteComponent } from './controll-batch-file-delete.component';

describe('ControllBatchFileDeleteComponent', () => {
  let component: ControllBatchFileDeleteComponent;
  let fixture: ComponentFixture<ControllBatchFileDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllBatchFileDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllBatchFileDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
