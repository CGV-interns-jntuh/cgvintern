//import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
//import { TallyDetailCommentsComponent } from './tally-detail-comments/tally-detail-comments.component';
//import { MaintainComponent } from './maintain/maintain.component';
//import { FormBuilder, Validators } from '@angular/forms';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
//import { IheaderService } from './iheader.service';
//import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
//import { CommentsComponent } from './comments/comments.component';
//import { TallyPostingComponent } from './tally-posting/tally-posting.component';
//import { UpdateComponent } from './update/update.component';
//import { TallyDetailWorkComponent } from './tally-detail-work/tally-detail-work.component';
//import { TallyInquiryComponent } from './tally-inquiry/tally-inquiry.component';
//import { TallyEventComponent } from './tally-event/tally-event.component';
//import { TallyDetailDeleteComponent } from './tally-detail-delete/tally-detail-delete.component';
//import { TallyDetailUpdateComponent } from './tally-detail-update/tally-detail-update.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TallyData } from '../tally-data';
import { GlobalComponent } from 'src/app/Global-Component';
import { Router } from '@angular/router';

interface customer {
  customerNo: Number;
  customerName: String;
  address: String;
  zipCode: Number;
  phoneNumber: Number;
  faxNumber: Number;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = [
    'CustomerNo',
    'CustomerName',
    'Address',
    'ZipCode',
    'PhoneNumber',
    'FaxNumber',
    'Actions',
  ];

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

  searchTextDisplay = false;
  dataSource: customer[] = [
    {
      customerNo: 1,
      customerName: 'Ram',
      address: 'hyd',
      zipCode: 123,
      phoneNumber: 987656787,
      faxNumber: 999,
    },
    {
      customerNo: 2,
      customerName: 'Ramu',
      address: 'wgl',
      zipCode: 456,
      phoneNumber: 887656787,
      faxNumber: 111,
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private matDialog: MatDialog
  ) {}

  addCustomer() {
    this.router.navigateByUrl('/main-nav/customers/add');
    // this.matDialog.open(CustomerCreateComponent, {
    //   width: '950px',
    //   height: 'auto',
    //   maxHeight: '95vh',
    // });
  }

  getUpdateForm(element: any) {
    //console.log("***********  "+tally);
    // console.log('elemendt Id :' + element['IHTALY']);
    // this.matDialog.open(UpdateComponent, {
    //   width: '950px',
    //   height: 'auto',
    //   maxHeight: '95vh',
    //   data: element,
    //   autoFocus: false,
    // });
    this.router.navigateByUrl('main-nav/customers/update', { state: element });
  }

  ngOnInit(): void {}
}
