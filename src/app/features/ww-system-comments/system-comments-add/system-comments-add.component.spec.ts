import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCommentsAddComponent } from './system-comments-add.component';

describe('SystemCommentsAddComponent', () => {
  let component: SystemCommentsAddComponent;
  let fixture: ComponentFixture<SystemCommentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemCommentsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemCommentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
