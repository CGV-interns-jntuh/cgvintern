import { GlobalComponent } from './../../../Global-Component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delete-account-processing',
  templateUrl: './delete-account-processing.component.html',
  styleUrls: ['./delete-account-processing.component.css'],
})
export class DeleteAccountProcessingComponent implements OnInit {
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;

  constructor(
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<DeleteAccountProcessingComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer: 773,
      Process: 'PICKORD',
      AccountStep: '    10',
      ProcessingTask: 'LOADMQ',
      TypefCondition: '',
      ResponsibleProfile: 'CCLLC',
      StandardHours: '       .00',
      StatusCode: 'AC',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  deleteAccountProcessing() {
    if (confirm('Delete')) {
      alert('deleted');
    }
  }
}
