import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddressesAddComponent } from './customer-addresses-add.component';

describe('CustomerAddressesAddComponent', () => {
  let component: CustomerAddressesAddComponent;
  let fixture: ComponentFixture<CustomerAddressesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddressesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddressesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
