import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTypeChangeComponent } from './address-type-change.component';

describe('AddressTypeChangeComponent', () => {
  let component: AddressTypeChangeComponent;
  let fixture: ComponentFixture<AddressTypeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressTypeChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressTypeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
