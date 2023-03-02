import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyDetailDeleteComponent } from './tally-detail-delete.component';

describe('TallyDetailDeleteComponent', () => {
  let component: TallyDetailDeleteComponent;
  let fixture: ComponentFixture<TallyDetailDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallyDetailDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyDetailDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
