import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddressesChangeComponent } from './customer-addresses-change.component';

describe('CustomerAddressesChangeComponent', () => {
  let component: CustomerAddressesChangeComponent;
  let fixture: ComponentFixture<CustomerAddressesChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddressesChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddressesChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
