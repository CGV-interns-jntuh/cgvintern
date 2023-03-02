import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCommentsChangeComponent } from './system-comments-change.component';

describe('SystemCommentsChangeComponent', () => {
  let component: SystemCommentsChangeComponent;
  let fixture: ComponentFixture<SystemCommentsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemCommentsChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemCommentsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
