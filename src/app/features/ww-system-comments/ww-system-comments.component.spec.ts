import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwSystemCommentsComponent } from './ww-system-comments.component';

describe('WwSystemCommentsComponent', () => {
  let component: WwSystemCommentsComponent;
  let fixture: ComponentFixture<WwSystemCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwSystemCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwSystemCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
