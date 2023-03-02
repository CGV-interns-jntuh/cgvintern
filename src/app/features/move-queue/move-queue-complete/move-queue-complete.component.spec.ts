import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveQueueCompleteComponent } from './move-queue-complete.component';

describe('MoveQueueCompleteComponent', () => {
  let component: MoveQueueCompleteComponent;
  let fixture: ComponentFixture<MoveQueueCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveQueueCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveQueueCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
