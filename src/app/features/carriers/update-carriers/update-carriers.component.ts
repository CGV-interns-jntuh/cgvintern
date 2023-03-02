import { ICarrierService } from './../i-carrier.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-carriers',
  templateUrl: './update-carriers.component.html',
  styleUrls: ['./update-carriers.component.css'],
})
export class UpdateCarriersComponent implements OnInit {
  storer: any;
  form!: FormGroup;
  result: any;
  constructor(
    public icarSvc: ICarrierService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateCarriersComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      carrierCode: 'AAAA',
      carrierName: 'ABCDEFGHI',
      address1: '123 AAA Street',
      address2: '',
      suffix: '89',
      pallet: true,
      hazmat: true,
      zipcode: '45678',
      billingFrequency: false,
      carrierSCACCode: 'AAAA',
      loadingAllowance: '',
      weight: '',
      minAmount: '',
      maxAmount: '',
    });
  }

  carrierUpdate() {
    console.log('updated');
  }
  closeDialog() {
    this.dialogRef.close();
  }
  back() {
    this.router.navigate(['carrier/read']);
  }
}
