import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerContactDeleteComponent } from './storer-contact-delete.component';

describe('StorerContactDeleteComponent', () => {
  let component: StorerContactDeleteComponent;
  let fixture: ComponentFixture<StorerContactDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerContactDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerContactDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
