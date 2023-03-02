import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerContactsComponent } from './storer-contacts.component';

describe('StorerContactsComponent', () => {
  let component: StorerContactsComponent;
  let fixture: ComponentFixture<StorerContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
