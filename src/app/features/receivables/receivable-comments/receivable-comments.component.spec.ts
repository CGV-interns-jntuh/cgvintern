import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivableCommentsComponent } from './receivable-comments.component';

describe('ReceivableCommentsComponent', () => {
  let component: ReceivableCommentsComponent;
  let fixture: ComponentFixture<ReceivableCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivableCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivableCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
