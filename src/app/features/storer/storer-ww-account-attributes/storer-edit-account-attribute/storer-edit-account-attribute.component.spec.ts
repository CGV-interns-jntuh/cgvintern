import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerEditAccountAttributeComponent } from './storer-edit-account-attribute.component';

describe('StorerEditAccountAttributeComponent', () => {
  let component: StorerEditAccountAttributeComponent;
  let fixture: ComponentFixture<StorerEditAccountAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerEditAccountAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerEditAccountAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
