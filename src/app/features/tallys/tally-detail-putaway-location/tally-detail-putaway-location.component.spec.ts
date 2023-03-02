import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyDetailPutawayLocationComponent } from './tally-detail-putaway-location.component';

describe('TallyDetailPutawayLocationComponent', () => {
  let component: TallyDetailPutawayLocationComponent;
  let fixture: ComponentFixture<TallyDetailPutawayLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallyDetailPutawayLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyDetailPutawayLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
