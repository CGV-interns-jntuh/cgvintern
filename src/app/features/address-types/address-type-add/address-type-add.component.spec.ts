import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTypeAddComponent } from './address-type-add.component';

describe('AddressTypeAddComponent', () => {
  let component: AddressTypeAddComponent;
  let fixture: ComponentFixture<AddressTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressTypeAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
