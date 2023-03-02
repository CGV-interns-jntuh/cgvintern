import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveQueueNoPickComponent } from './move-queue-no-pick.component';

describe('MoveQueueNoPickComponent', () => {
  let component: MoveQueueNoPickComponent;
  let fixture: ComponentFixture<MoveQueueNoPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveQueueNoPickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveQueueNoPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
