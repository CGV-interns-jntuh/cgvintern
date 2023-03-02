import { GlobalComponent } from './../../../Global-Component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-copy-workflow-account-processing',
  templateUrl: './copy-workflow-account-processing.component.html',
  styleUrls: ['./copy-workflow-account-processing.component.css'],
})
export class CopyWorkflowAccountProcessingComponent implements OnInit {
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CopyWorkflowAccountProcessingComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Process: 'PICKORD',
      FromStorer: 773,
      ToStorer: '',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
