import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithBookDetailsComponent } from './work-with-book-details.component';

describe('WorkWithBookDetailsComponent', () => {
  let component: WorkWithBookDetailsComponent;
  let fixture: ComponentFixture<WorkWithBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithBookDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkWithBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
