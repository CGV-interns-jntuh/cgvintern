import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTypeDeleteComponent } from './address-type-delete.component';

describe('AddressTypeDeleteComponent', () => {
  let component: AddressTypeDeleteComponent;
  let fixture: ComponentFixture<AddressTypeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressTypeDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
