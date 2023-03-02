import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-storer-account-status',
  templateUrl: './storer-account-status.component.html',
  styleUrls: ['./storer-account-status.component.css'],
})
export class StorerAccountStatusComponent implements OnInit {
  item: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StorerAccountStatusComponent>
  ) {}
  form = this.fb.group({
    Account: 'Escobedo Plant 11',
    ReportingFor: '',
    Consign: '',
    OmitPallets: false,
    Units: '',
    TotalOrdersShipped: '',
    TotalShipmentsReceived: '',
    OrdersWLoosePicks: '',
    TotalLines: '',
    TotalLinesReceived: '',
    LinesAfterSplits: '',
    TotalPutaway: '',
    LinesWithExceptions: '',
    LinesWithExceptionsIn: '',
    TotalUnitsPicked: '',
    TotalUnitsReceived: '',
    TotalPalletsPicked: '',
    TotalPalletsReceived: '',
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
