import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inquiry-balance',
  templateUrl: './inquiry-balance.component.html',
  styleUrls: ['./inquiry-balance.component.css'],
})
export class InquiryBalanceComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<InquiryBalanceComponent>
  ) {}

  form!: FormGroup;
  result: any;
  ngOnInit(): void {
    this.form = this.fb.group({
      StorerNumber: 13,
      Date: '12/19/2022',
      Type: 'P',
      ItemCode: 'AACNDF80823',
      LotCodes: '',
      Building: 13,
      StorageInvoiceNumber: '',
      QtyOnHand: '',
      QtyAllocated: '',
      QtyCommitted: '',
      QtyHeld: '',
      QtyDamaged: '',
      QtyShipped: '',
      WgtOnHand: '    .00',
      WgtAllocated: '    .00',
      WgtCommitted: '    .00',
      WgtHeld: '    .00',
      WgtDamaged: '    .00',
      WgtShipped: '    .00',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  InquiryBalance() {
    console.log('inquiry');
  }
}
