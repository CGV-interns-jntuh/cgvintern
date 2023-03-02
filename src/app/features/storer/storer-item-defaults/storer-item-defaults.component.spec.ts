import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerItemDefaultsComponent } from './storer-item-defaults.component';

describe('StorerItemDefaultsComponent', () => {
  let component: StorerItemDefaultsComponent;
  let fixture: ComponentFixture<StorerItemDefaultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerItemDefaultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerItemDefaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
