import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyDetailUpdateComponent } from './tally-detail-update.component';

describe('TallyDetailUpdateComponent', () => {
  let component: TallyDetailUpdateComponent;
  let fixture: ComponentFixture<TallyDetailUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallyDetailUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyDetailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
