import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsineeCommentsComponent } from './consinee-comments.component';

describe('ConsineeCommentsComponent', () => {
  let component: ConsineeCommentsComponent;
  let fixture: ComponentFixture<ConsineeCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsineeCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsineeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
