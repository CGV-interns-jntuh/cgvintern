import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerAcctAttributeComponent } from './storer-acct-attribute.component';

describe('StorerAcctAttributeComponent', () => {
  let component: StorerAcctAttributeComponent;
  let fixture: ComponentFixture<StorerAcctAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerAcctAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerAcctAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
