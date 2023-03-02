import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyEventComponent } from './tally-event.component';

describe('TallyEventComponent', () => {
  let component: TallyEventComponent;
  let fixture: ComponentFixture<TallyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallyEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
