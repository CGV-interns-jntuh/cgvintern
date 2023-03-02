import { GlobalComponent } from './../../../Global-Component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-account-processing',
  templateUrl: './update-account-processing.component.html',
  styleUrls: ['./update-account-processing.component.css'],
})
export class UpdateAccountProcessingComponent implements OnInit {
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateAccountProcessingComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer: 773,
      Process: 'PICKORD',
      Condition: [null],
      AccountStep: '    10',
      StandardHours: '       .00',
      Task: 'LOADMQ',
      Responsible: 'CCLLC',
      StatusCode: 'AC',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
