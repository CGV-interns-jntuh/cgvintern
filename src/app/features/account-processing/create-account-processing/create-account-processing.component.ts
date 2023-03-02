import { GlobalComponent } from './../../../Global-Component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account-processing',
  templateUrl: './create-account-processing.component.html',
  styleUrls: ['./create-account-processing.component.css'],
})
export class CreateAccountProcessingComponent implements OnInit {
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    private fb: FormBuilder,
    private activeRouter: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<CreateAccountProcessingComponent>
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      Storer: '',
      Process: '',
      Condition: '',
      AccountStep: '',
      StandardHours: '       .00',
      Task: '',
      Responsible: '',
      StatusCode: 'AC',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
