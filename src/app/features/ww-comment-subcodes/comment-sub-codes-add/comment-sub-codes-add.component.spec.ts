import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSubCodesAddComponent } from './comment-sub-codes-add.component';

describe('CommentSubCodesAddComponent', () => {
  let component: CommentSubCodesAddComponent;
  let fixture: ComponentFixture<CommentSubCodesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentSubCodesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentSubCodesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
