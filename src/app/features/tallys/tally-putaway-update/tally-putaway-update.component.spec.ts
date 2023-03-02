import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyPutawayUpdateComponent } from './tally-putaway-update.component';

describe('TallyPutawayUpdateComponent', () => {
  let component: TallyPutawayUpdateComponent;
  let fixture: ComponentFixture<TallyPutawayUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallyPutawayUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyPutawayUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
