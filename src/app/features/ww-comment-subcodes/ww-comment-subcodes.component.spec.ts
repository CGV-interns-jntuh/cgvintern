import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwCommentSubcodesComponent } from './ww-comment-subcodes.component';

describe('WwCommentSubcodesComponent', () => {
  let component: WwCommentSubcodesComponent;
  let fixture: ComponentFixture<WwCommentSubcodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwCommentSubcodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwCommentSubcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
