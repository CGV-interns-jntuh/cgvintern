import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) {}

  addCustomerForm: any = this.fb.group({
    customerNo: [null],
    customerName: [null],
    address: [null],
    zipCode: [null],
    phoneNumber: [null],
    faxNumber: [null],
    contactPerson: [null],
    sortField: [null],
    printStatement: [null],
  });

  onBack() {
    this.router.navigate(['/main-nav/customers/read']);
  }

  ngOnInit(): void {}
}
