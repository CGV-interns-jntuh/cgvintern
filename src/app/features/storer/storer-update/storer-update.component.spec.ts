import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerUpdateComponent } from './storer-update.component';

describe('StorerUpdateComponent', () => {
  let component: StorerUpdateComponent;
  let fixture: ComponentFixture<StorerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
