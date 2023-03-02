import { AddBalanceComponent } from './add-balance/add-balance.component';
import { InquiryBalanceComponent } from './inquiry-balance/inquiry-balance.component';
import { StgInquiryBalanceComponent } from './stg-inquiry-balance/stg-inquiry-balance.component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { DeleteBalanceComponent } from './delete-balance/delete-balance.component';
@Component({
  selector: 'app-item-balances',
  templateUrl: './item-balances.component.html',
  styleUrls: ['./item-balances.component.css'],
})
export class ItemBalancesComponent implements OnInit {
  displayedColumns: string[] = [
    'Lot Code',
    'Date Written',
    'Type(P/W/D)',
    'On Hand',
    'Allocated',
    'Committed',
    'Damaged',
    'Actions',
  ];

  form = this.fb.group({
    storer: 13,
    item: 'AACNDF80823 TEST 123',
    date: [null],
    lots: [null],
  });

  constructor(
    private activeRouter: ActivatedRoute,
    public iHeaderSvc: IheaderService,
    private router: Router,
    private matDialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ItemBalancesComponent>
  ) {}
  ngOnInit(): void {
    this.posting();
  }
  user = 'NKOHAN';
  building = 13;
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

  itemBalanceDelete(element: any) {
    this.matDialog.open(DeleteBalanceComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }

  itemBalanceCreate() {
    this.matDialog.open(AddBalanceComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }
  itemBalanceInquiry(element: any) {
    this.matDialog.open(InquiryBalanceComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }
  itemBalanceStgInquiry(element: any) {
    this.matDialog.open(StgInquiryBalanceComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
