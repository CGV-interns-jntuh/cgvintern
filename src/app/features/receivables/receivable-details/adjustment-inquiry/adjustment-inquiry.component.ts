import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';
@Component({
  selector: 'app-adjustment-inquiry',
  templateUrl: './adjustment-inquiry.component.html',
  styleUrls: ['./adjustment-inquiry.component.css'],
})
export class AdjustmentInquiryComponent implements OnInit {
  displayedColumns: string[] = [
    'SeqNo',
    'AdjustDate',
    'Ledger',
    'Description',
    'AdjustmentAmount',
  ];

  form = this.fb.group({
    Invoice: '18',
    Customer: '0181 Lanxess Corp',
    Date: '01/28/2020',
    BillTo: '0181 Lanxess Corp',
    Amount: '$25.00',
    Type: 'Warehouse Receipt',
    AdjustedValue: '$0.0',
  });

  constructor(
    private activeRouter: ActivatedRoute,
    public iHeaderSvc: IheaderService,
    private router: Router,
    private matDialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<AdjustmentInquiryComponent>
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
  adjustedValue() {
    return '$0.00';
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
