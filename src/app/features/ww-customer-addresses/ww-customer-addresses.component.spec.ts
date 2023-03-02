import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwCustomerAddressesComponent } from './ww-customer-addresses.component';

describe('WwCustomerAddressesComponent', () => {
  let component: WwCustomerAddressesComponent;
  let fixture: ComponentFixture<WwCustomerAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwCustomerAddressesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwCustomerAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
