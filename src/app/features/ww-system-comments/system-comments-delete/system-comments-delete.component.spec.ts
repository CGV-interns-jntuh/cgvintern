import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCommentsDeleteComponent } from './system-comments-delete.component';

describe('SystemCommentsDeleteComponent', () => {
  let component: SystemCommentsDeleteComponent;
  let fixture: ComponentFixture<SystemCommentsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemCommentsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemCommentsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
