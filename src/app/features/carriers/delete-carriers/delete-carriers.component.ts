import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICarrierService } from '../i-carrier.service';

@Component({
  selector: 'app-delete-carriers',
  templateUrl: './delete-carriers.component.html',
  styleUrls: ['./delete-carriers.component.css'],
})
export class DeleteCarriersComponent implements OnInit {
  carrier: any;
  form!: FormGroup;
  constructor(
    public icarSvc: ICarrierService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteCarriersComponent>
  ) {}

  ngOnInit(): void {
    this.carrier = this.anyvariable;
    this.form = this.fb.group({
      carrierCode: 'AAAA',
      carrierName: 'ABCDEFGHI',
      address1: '123 AAA Street',
      address2: '',
      carrierSCACCode: 'AAAA',
    });
  }
  deleteCarrier() {
    alert('Deleted');
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
