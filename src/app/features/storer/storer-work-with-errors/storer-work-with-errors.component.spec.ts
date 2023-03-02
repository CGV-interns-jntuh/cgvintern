import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerWorkWithErrorsComponent } from './storer-work-with-errors.component';

describe('StorerWorkWithErrorsComponent', () => {
  let component: StorerWorkWithErrorsComponent;
  let fixture: ComponentFixture<StorerWorkWithErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerWorkWithErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerWorkWithErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
