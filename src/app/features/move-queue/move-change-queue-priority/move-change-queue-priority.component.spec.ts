import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveChangeQueuePriorityComponent } from './move-change-queue-priority.component';

describe('MoveChangeQueuePriorityComponent', () => {
  let component: MoveChangeQueuePriorityComponent;
  let fixture: ComponentFixture<MoveChangeQueuePriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveChangeQueuePriorityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveChangeQueuePriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
