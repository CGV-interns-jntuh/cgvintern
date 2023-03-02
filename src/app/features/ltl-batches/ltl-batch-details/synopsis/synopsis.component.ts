import { GlobalComponent } from './../../../../Global-Component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.css'],
})
export class SynopsisComponent implements OnInit {
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<SynopsisComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Shipment: 2,
      Load: 9,
      TotalQuantity: 155,
      Status: 'IV',
      Stop: 2,
      TotalCBFT: '',
      Carriers: 'SXTI',
      TotalWeight: 23646.0,
      Customer: ' 9849 Unilever',
      DeliverTo: '6288 Fiesta Dr',
      Numbers: '',
      Dates: '',
    });
  }

  changeLTI() {}

  closeDialog() {
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
