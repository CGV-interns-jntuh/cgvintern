import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerXrefComponent } from './storer-xref.component';

describe('StorerXrefComponent', () => {
  let component: StorerXrefComponent;
  let fixture: ComponentFixture<StorerXrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerXrefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerXrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
