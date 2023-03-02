import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignLaneOrderStagingComponent } from './assign-lane-order-staging.component';

describe('AssignLaneOrderStagingComponent', () => {
  let component: AssignLaneOrderStagingComponent;
  let fixture: ComponentFixture<AssignLaneOrderStagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignLaneOrderStagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignLaneOrderStagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
