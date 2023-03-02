import { TransactionInquiryComponent } from './transaction-inquiry/transaction-inquiry.component';
import { GlobalComponent } from 'src/app/Global-Component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { AdjustmentInquiryComponent } from './adjustment-inquiry/adjustment-inquiry.component';
import { UpdateLedgerComponent } from './update-ledger/update-ledger.component';

@Component({
  selector: 'app-receivable-details',
  templateUrl: './receivable-details.component.html',
  styleUrls: ['./receivable-details.component.css'],
})
export class ReceivableDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'St',
    'InvoiceNumber',
    'SeqNo',
    'BillToCustomer',
    'InvoiceDate',
    'TransDate',
    'Amount',
    'Actions',
  ];

  form = this.fb.group({
    selections: 'Dates: All Custs: All Bldgs:All',
    ledger: '0100 00 Handling Charges',
  });

  constructor(
    private activeRouter: ActivatedRoute,
    public iHeaderSvc: IheaderService,
    private router: Router,
    private matDialog: MatDialog,
    private fb: FormBuilder,
   // private dialogRef: MatDialogRef<ReceivableDetailsComponent>
  ) {}
  ngOnInit(): void {
    this.posting();
  }
  user = GlobalComponent.user;
  building = GlobalComponent.building;
  TallyHeaders: any = [];
  duplicateSource = [];
  id: any;
  postingDate: any;
  result: any;
  dataSource: any;

  workHeaders: any = [];

  posting() {
    this.TallyHeaders = this.iHeaderSvc
      .getAll(this.user, this.building)
      .subscribe((data) => {
        this.result = data;
        this.TallyHeaders = data;
        var res = this.result[0].data[1]?.value;

        var parsedData = JSON.parse(res);
        this.dataSource = parsedData.returnedData;
        this.duplicateSource = this.dataSource;
        console.log(this.dataSource);
      });
  }

  closeDialog() {
    //this.dialogRef.close();
  }
  updateLedger(tally: any) {
    this.matDialog.open(UpdateLedgerComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: tally,
      autoFocus: false,
    });
  }
  adjustmentInquiry(tally: any) {
    this.matDialog.open(AdjustmentInquiryComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: tally,
      autoFocus: false,
    });
  }
  adjustmentTransactionInquiry(tally: any) {
    this.matDialog.open(TransactionInquiryComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: tally,
      autoFocus: false,
    });
  }
}
