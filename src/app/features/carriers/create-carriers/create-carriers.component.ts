import { ICarrierService } from './../i-carrier.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-carriers',
  templateUrl: './create-carriers.component.html',
  styleUrls: ['./create-carriers.component.css'],
})
export class CreateCarriersComponent implements OnInit {
  constructor(
    private router: Router,
    public icarSvc: ICarrierService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<CreateCarriersComponent>
  ) {}

  form!: FormGroup;
  result: any;
  ngOnInit(): void {
    this.form = this.fb.group({
      carrierCode: [null],
      carrierName: [null],
      address1: [null],
      address2: [null],
      suffix: [null],
      pallet: false,
      hazmat: true,
      zipcode: [null],
      billingFrequency: false,
      carrierSCACCode: ['', [Validators.pattern('[a-zA-Z]{4}')]],
      loadingAllowance: [null],
      weight: ['', [Validators.pattern('[0-9]{1,3}'), Validators.max(100)]],
      minAmount: ['', [Validators.pattern('[0-9]{1,10}'), Validators.min(0)]],
      maxAmount: ['', [Validators.pattern('[0-9]{1,10}')]],
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addCarrier() {
    console.log('added');
  }
}
