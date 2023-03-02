import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveQueueChangeComponent } from './move-queue-change.component';

describe('MoveQueueChangeComponent', () => {
  let component: MoveQueueChangeComponent;
  let fixture: ComponentFixture<MoveQueueChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveQueueChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveQueueChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
