import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment-entry',
  templateUrl: './appointment-entry.component.html',
  styleUrls: ['./appointment-entry.component.css']
})
export class AppointmentEntryComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AppointmentEntryComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      billOfLading:'4785732' ,
      storer:'8508 Nission Food',
      consignee:'DOL120129330 DOLLAR Treee/Cowpens Dc11',
      appointmentDate:'',
      time:'',
      contactName:''
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  assignLane() {
    alert('assign lane');
  }

}
