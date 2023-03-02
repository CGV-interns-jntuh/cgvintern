import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllBatchFileCreateComponent } from './controll-batch-file-create.component';

describe('ControllBatchFileCreateComponent', () => {
  let component: ControllBatchFileCreateComponent;
  let fixture: ComponentFixture<ControllBatchFileCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllBatchFileCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllBatchFileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
