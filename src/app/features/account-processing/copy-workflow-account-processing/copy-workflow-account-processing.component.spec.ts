import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyWorkflowAccountProcessingComponent } from './copy-workflow-account-processing.component';

describe('CopyWorkflowAccountProcessingComponent', () => {
  let component: CopyWorkflowAccountProcessingComponent;
  let fixture: ComponentFixture<CopyWorkflowAccountProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyWorkflowAccountProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyWorkflowAccountProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
