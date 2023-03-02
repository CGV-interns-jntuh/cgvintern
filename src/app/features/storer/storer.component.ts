import { ItemLotsComponent } from './../item/item-lots/item-lots.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { SroterPeriodRecordsComponent } from './storer-period-records/sroter-period-records.component';
import { SroterWriteBalanceRecordComponent } from './storer-write-balance-record/sroter-write-balance-record.component';
import { StorerContactCreateComponent } from './storer-contacts/storer-contact-create/storer-contact-create.component';
import { StorerCreateComponent } from './storer-create/storer-create.component';
import { StorerDeactiveComponent } from './storer-deactive/storer-deactive.component';
import { StorerUpdateComponent } from './storer-update/storer-update.component';
import { StorerServiceService } from './storer-service.service';
import { StorerAccessInvoiceEnquiryComponent } from './storer-access-invoice-enquiry/storer-access-invoice-enquiry.component';
import { StorerArAgingInquiryComponent } from './storer-ar-aging-inquiry/storer-ar-aging-inquiry.component';
import { StorerRecIvcInquiryComponent } from './storer-rec-ivc-inquiry/storer-rec-ivc-inquiry.component';
import { StorerEdiDocumentsComponent } from './storer-edi-documents/storer-edi-documents.component';
import { StorerConsItemComponent } from './storer-cons-item/storer-cons-item.component';
import { StorerUccSerCtlComponent } from './storer-ucc-ser-ctl/storer-ucc-ser-ctl.component';
import { StorerUccLblCtlComponent } from './storer-ucc-lbl-ctl/storer-ucc-lbl-ctl.component';
import { StorerPrintersComponent } from './storer-printers/storer-printers.component';
import { StorerRatesBasesComponent } from './storer-rates-bases/storer-rates-bases.component';
import { StorerChangeRatesComponent } from './storer-change-rates/storer-change-rates.component';
import { StorerGen869TriggerComponent } from './storer-gen869-trigger/storer-gen869-trigger.component';
import { StorerReasonablenessComponent } from './storer-reasonableness/storer-reasonableness.component';
import { StorerEdiInfoComponent } from './storer-edi-info/storer-edi-info.component';
import { StorerItemDefaultsComponent } from './storer-item-defaults/storer-item-defaults.component';
import { StorerWorkWithErrorsComponent } from './storer-work-with-errors/storer-work-with-errors.component';
import { StorerExportComponent } from './storer-export/storer-export.component';
import { StorerAttributesComponent } from './storer-attributes/storer-attributes.component';
import { StorerInvoiceInquiryComponent } from './storer-invoice-inquiry/storage-invoice-inquiry.component';
import { StorerXrefComponent } from './storer-xref/storer-xref.component';
import { StorerAccountStatusComponent } from './storer-account-status/storer-account-status.component';
import { StorerAccountAttributesComponent } from './storer-account-attributes/storer-account-attributes.component';
import { GlobalComponent } from 'src/app/Global-Component';
import { StorerAcctAttributeComponent } from './storer-acct-attribute/storer-acct-attribute.component';
import { StorerCommentsComponent } from './storer-comments/storer-comments.component';
import { StorerExpNoActivityComponent } from './storer-exp-no-activity/storer-exp-no-activity.component';
import { StorerProductCodesComponent } from './storer-product-codes/storer-product-codes.component';
import { StorerAutoRatesComponent } from './storer-auto-rates/storer-auto-rates.component';
import { StorerPutawaySchemeComponent } from './storer-putaway-scheme/storer-putaway-scheme.component';
import { StorerDailyStatusComponent } from './storer-daily-status/storer-daily-status.component';
import { StorerShortStockComponent } from './storer-short-stock/storer-short-stock.component';
import { StorageInvoiceInquiryComponent } from './storage-invoice-inquiry/storage-invoice-inquiry.component';
import { StorerAutoSchedulingProceesUpdateComponent } from './storer-auto-scheduling-procees/storer-auto-scheduling-procees-update/storer-auto-scheduling-procees-update.component';

import { StorerDeleteComponent } from './storer-delete/storer-delete.component';

import { ItemComponent } from '../item/item.component';


@Component({
  selector: 'app-storer',
  templateUrl: './storer.component.html',
  styleUrls: ['./storer.component.css'],
})
export class StorerComponent implements OnInit {
  displayedColumns: string[] = [
    'StorerNumber',
    'StorerSuffix',
    'StorerName',
    'BuildingNumber',
    'PrimaryAcc',
    'Rep',
    'Actions',
  ];

  searchText: any;

  updateForm = this.fb.group({
    storerNum: [
      '',
      [
        Validators.required,
        Validators.min(0),
        Validators.pattern('[0-9]{1,10}'),
      ],
    ],
    building: [null],
    onlyActive: [null],
    storerName: [null],
    acctRep: 'Naren',
  });

  result: any = [];
  dataSource = [];
  duplicateSource = [];
  singleTallyData = [];
  documents = [];
  user = GlobalComponent.user;
  user1 = 'IPUTTAGUNT';
  building = GlobalComponent.building;
  tally: any;
  searchValue: string = '';
  condition: boolean = true;
  prevText: string = '';
  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    public storerService: StorerServiceService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}
  TallyHeaders: any = [];
  id: number = 0;
  ngOnInit(): void {
    this.TallyHeaders = this.storerService
      .getAll(this.user)
      .subscribe((data) => {
        this.result = data;
        var res = this.result;

        var parsedData = JSON.parse(res);
        this.dataSource = parsedData.returnedData;
        console.log(this.dataSource);
        //   console.log('DATA')
        //   console.log(data);
        //  this.result = data;
        //  this.TallyHeaders = data;

        //    var res = data;
        // //  console.log(res);

        //  var parsedData =  JSON.parse(res);
        //  console.log( JSON.parse(res).success)
        //  console.log(parsedData);
        //  console.log(parsedData['returnedData']);
        //   this.dataSource = parsedData.returnedData;
        // //  this.duplicateSource=this.dataSource;
        //   console.log(this.dataSource);
      });

    // this.TallyHeaders = this.iHeaderSvc
    //   .getAll(this.user,this.building)
    //   .subscribe((data) => {
    //     this.result = data;
    //     this.TallyHeaders = data;
    //     console.log(data);
    //     var res = this.result[0].data[1]?.value;
    //     console.log(res);

    //     var parsedData = JSON.parse(res);
    //     this.dataSource = parsedData.returnedData;
    //     this.duplicateSource = this.dataSource;
    //     console.log(this.dataSource);
    //   });
  }

  storerCreate(tally: any) {
    this.matDialog.open(StorerCreateComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: tally,
      autoFocus: false,
    });
  }

  storerUpdate(storer: any) {
    this.matDialog.open(StorerUpdateComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerDeactive(storer: any) {
    this.matDialog.open(StorerDeactiveComponent, {
      width: '1500px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerPeriodRecords(storer: any) {
    this.matDialog.open(SroterPeriodRecordsComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }
  storerItem(storer: any) {
    this.matDialog.open(ItemComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerWriteBalanceRecords(storer: any) {
    this.matDialog.open(SroterWriteBalanceRecordComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerAccessInvoiceInquiry(storer: any) {
    this.matDialog.open(StorerAccessInvoiceEnquiryComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerAragingInquiry(storer: any) {
    this.matDialog.open(StorerArAgingInquiryComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerRecIvcInquiry(storer: any) {
    this.matDialog.open(StorerRecIvcInquiryComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerEdiDocuments(storer: any) {
    this.matDialog.open(StorerEdiDocumentsComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerConsItem(storer: any) {
    this.matDialog.open(StorerConsItemComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerUccSerCtl(storer: any) {
    this.matDialog.open(StorerUccSerCtlComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerUccLblCtl(storer: any) {
    this.matDialog.open(StorerUccLblCtlComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerPrinters(storer: any) {
    this.matDialog.open(StorerPrintersComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerRateBasis(storer: any) {
    this.matDialog.open(StorerRatesBasesComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerRateChange(storer: any) {
    this.matDialog.open(StorerChangeRatesComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerGen869Trigger(storer: any) {
    this.matDialog.open(StorerGen869TriggerComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerResonableness(storer: any) {
    this.matDialog.open(StorerReasonablenessComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerEdiInfo(storer: any) {
    this.matDialog.open(StorerEdiInfoComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerItemDefaults(storer: any) {
    this.matDialog.open(StorerItemDefaultsComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerWorkWithErrors(storer: any) {
    this.matDialog.open(StorerWorkWithErrorsComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerExport(storer: any) {
    this.matDialog.open(StorerExportComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerAttributes(storer: any) {
    this.matDialog.open(StorerAttributesComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerInvoiceInquiry(storer: any) {
    this.matDialog.open(StorerInvoiceInquiryComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerXref(storer: any) {
    this.matDialog.open(StorerXrefComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerStatus(storer: any) {
    this.matDialog.open(StorerAccountStatusComponent, {
      width: '1000px',
      maxHeight: '100vh',

      data: storer,
      autoFocus: false,
    });
  }
  storerAccount(storer: any) {
    this.matDialog.open(StorerAccountAttributesComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerAccountAttribute(storer: any) {
    this.matDialog.open(StorerAcctAttributeComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerComments(storer: any) {
    this.matDialog.open(StorerCommentsComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerExpNoActivity(storer: any) {
    this.matDialog.open(StorerExpNoActivityComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerProductCode(storer: any) {
    this.matDialog.open(StorerProductCodesComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerAutoRate(storer: any) {
    this.matDialog.open(StorerAutoRatesComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerPutawayScheme(storer: any) {
    this.matDialog.open(StorerPutawaySchemeComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerDailyStatus(storer: any) {
    this.matDialog.open(StorerDailyStatusComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerShortStock(storer: any) {
    this.matDialog.open(StorerShortStockComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storageInvoiceInquiry(storer: any) {
    this.matDialog.open(StorageInvoiceInquiryComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerDelete(storer: any) {
    this.matDialog.open(StorerDeleteComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: storer,
      autoFocus: false,
    });
  }

  storerAutoSchdulingAndProcess(storer: any) {
    this.router.navigate(['/main-nav/storer/autoScheduleProcess']);
    // this.matDialog.open(StorageInvoiceInquiryComponent, {
    //   width: '1000px',
    //   maxHeight: '80vh',

    //   data: storer,
    //   autoFocus: false,
    // });
  }

  storerWwAccountAttribute(storer: any) {
    this.router.navigate(['/main-nav/storer/account-attribute']);
    // this.matDialog.open(StorerPutawaySchemeComponent, {
    //   width: '1000px',
    //   maxHeight: '80vh',

    //   data: storer,
    //   autoFocus: false,
    // });
  }

  storerContacts(storer: any) {
    this.router.navigate(['/main-nav/storer/contacts', storer]);
    // this.matDialog.open(StorerDeactiveComponent, {
    //   "width": '1000px',
    //   "maxHeight": '80vh',

    //   "data": storer,
    //   "autoFocus": false
    // });
  }
}
