import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerDeleteComponent } from './storer-delete.component';

describe('StorerDeleteComponent', () => {
  let component: StorerDeleteComponent;
  let fixture: ComponentFixture<StorerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
