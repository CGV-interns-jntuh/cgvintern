import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveQueueEntryAssignComponent } from './move-queue-entry-assign.component';

describe('MoveQueueEntryAssignComponent', () => {
  let component: MoveQueueEntryAssignComponent;
  let fixture: ComponentFixture<MoveQueueEntryAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveQueueEntryAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveQueueEntryAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
