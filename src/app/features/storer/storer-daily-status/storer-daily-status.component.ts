import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-storer-daily-status',
  templateUrl: './storer-daily-status.component.html',
  styleUrls: ['./storer-daily-status.component.css'],
})
export class StorerDailyStatusComponent implements OnInit {
  item: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StorerDailyStatusComponent>
  ) {}
  form = this.fb.group({
    Account: 'Escobedo Plant 11',
    ReportingFor: '11/21/2022',
    OmitPallets: false,
    TotalCasesToPick: '',
    TotalCasesExpected: '',
    TotalOrdersToPick: '',
    TotalShipmentsExpected: '',
    OrdersWLoosePicks: '',
    TotalCasesPicked: '',
    TotalCasesReceived: '',
    TotalOrdersPicked: '',
    TotalShipmentsReceived: '',
    CasesNotPicked: '',
    CasesUnreceived: '',
    OrdersNotPicked: '',
    ShipmentsUnreceived: '',
    Pallets1: '',
    Pallets2: '',
    Layers1: '',
    Layers2: '',
    Loose1: '',
    Loose2: '',
  });
  ngOnInit(): void {
    this.item = this.anyvariable;
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
