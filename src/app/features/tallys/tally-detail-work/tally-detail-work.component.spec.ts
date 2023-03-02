import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyDetailWorkComponent } from './tally-detail-work.component';

describe('TallyDetailWorkComponent', () => {
  let component: TallyDetailWorkComponent;
  let fixture: ComponentFixture<TallyDetailWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallyDetailWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyDetailWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
