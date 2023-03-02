import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerConsItemComponent } from './storer-cons-item.component';

describe('StorerConsItemComponent', () => {
  let component: StorerConsItemComponent;
  let fixture: ComponentFixture<StorerConsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerConsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerConsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
