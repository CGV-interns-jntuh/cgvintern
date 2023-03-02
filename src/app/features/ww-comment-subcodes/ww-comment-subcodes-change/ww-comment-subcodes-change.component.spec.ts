import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwCommentSubcodesChangeComponent } from './ww-comment-subcodes-change.component';

describe('WwCommentSubcodesChangeComponent', () => {
  let component: WwCommentSubcodesChangeComponent;
  let fixture: ComponentFixture<WwCommentSubcodesChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwCommentSubcodesChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwCommentSubcodesChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
