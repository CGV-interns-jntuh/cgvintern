import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithBatchDetailsComponent } from './work-with-batch-details.component';

describe('WorkWithBatchDetailsComponent', () => {
  let component: WorkWithBatchDetailsComponent;
  let fixture: ComponentFixture<WorkWithBatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithBatchDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkWithBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
