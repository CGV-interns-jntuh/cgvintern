import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerCommentsComponent } from './storer-comments.component';

describe('StorerCommentsComponent', () => {
  let component: StorerCommentsComponent;
  let fixture: ComponentFixture<StorerCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
