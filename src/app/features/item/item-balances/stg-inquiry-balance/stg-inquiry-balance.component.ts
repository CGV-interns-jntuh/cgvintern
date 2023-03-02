import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stg-inquiry-balance',
  templateUrl: './stg-inquiry-balance.component.html',
  styleUrls: ['./stg-inquiry-balance.component.css'],
})
export class StgInquiryBalanceComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<StgInquiryBalanceComponent>
  ) {}

  form!: FormGroup;
  result: any;
  ngOnInit(): void {
    this.form = this.fb.group({
      Storer: '0013  Neils Item Storer',
      Item: 'AACNDF80823 TEST 123',
      Lot: '',
      LotMin: '',
      ItemMinimum: '',
      OnHandQuantity: '',
      Weight: '',
      QuantityPallet: '',
      Cubes: '',
      Basis: '',
      BasisQuantity: '',
      XRate: '',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  StgInquiry() {
    console.log('Stg Inquiry');
  }
}
