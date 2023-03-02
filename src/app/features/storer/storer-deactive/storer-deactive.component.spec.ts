import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerDeactiveComponent } from './storer-deactive.component';

describe('StorerDeactiveComponent', () => {
  let component: StorerDeactiveComponent;
  let fixture: ComponentFixture<StorerDeactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerDeactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerDeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
