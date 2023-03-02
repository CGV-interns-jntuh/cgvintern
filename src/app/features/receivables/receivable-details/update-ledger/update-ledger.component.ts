import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-ledger',
  templateUrl: './update-ledger.component.html',
  styleUrls: ['./update-ledger.component.css'],
})
export class UpdateLedgerComponent implements OnInit {
  item: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateLedgerComponent>
  ) {}
  form = this.fb.group({
    InvoiceNumber: '18',
    SequenceNumber: '001',
    InvoiceDate: '01/28/2020',
    LineAmount: '$25.00',
    LedgerCode: '100',
    LedgerSubCode: '',
    BuildingNumber: '100',
  });
  ngOnInit(): void {
    this.item = this.anyvariable;
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
