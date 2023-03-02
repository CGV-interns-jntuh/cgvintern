import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css'],
})
export class CustomerUpdateComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) {}

  element = history.state;

  updateCustomerForm: any = this.fb.group({
    customerNo: [this.element.customerNo],
    customerName: [this.element.customerName],
    address: [this.element.address],
    zipCode: [this.element.zipCode],
    phoneNumber: [this.element.phoneNumber],
    faxNumber: [this.element.faxNumber],
    contactPerson: [null],
    sortField: [null],
    printStatement: [null],
  });

  onBack() {
    this.router.navigate(['/main-nav/customers/read']);
  }

  ngOnInit(): void {}
}
