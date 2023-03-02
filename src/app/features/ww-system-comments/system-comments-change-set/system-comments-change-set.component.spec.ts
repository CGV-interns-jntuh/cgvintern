import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCommentsChangeSetComponent } from './system-comments-change-set.component';

describe('SystemCommentsChangeSetComponent', () => {
  let component: SystemCommentsChangeSetComponent;
  let fixture: ComponentFixture<SystemCommentsChangeSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemCommentsChangeSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemCommentsChangeSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
