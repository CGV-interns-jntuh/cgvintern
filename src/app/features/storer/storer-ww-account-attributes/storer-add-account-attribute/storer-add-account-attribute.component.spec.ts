import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerAddAccountAttributeComponent } from './storer-add-account-attribute.component';

describe('StorerAddAccountAttributeComponent', () => {
  let component: StorerAddAccountAttributeComponent;
  let fixture: ComponentFixture<StorerAddAccountAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerAddAccountAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerAddAccountAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
