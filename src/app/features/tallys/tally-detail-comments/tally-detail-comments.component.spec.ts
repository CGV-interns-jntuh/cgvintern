import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyDetailCommentsComponent } from './tally-detail-comments.component';

describe('TallyDetailCommentsComponent', () => {
  let component: TallyDetailCommentsComponent;
  let fixture: ComponentFixture<TallyDetailCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallyDetailCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyDetailCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
