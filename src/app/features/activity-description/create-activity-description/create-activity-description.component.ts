import { GlobalComponent } from './../../../Global-Component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-activity-description',
  templateUrl: './create-activity-description.component.html',
  styleUrls: ['./create-activity-description.component.css'],
})
export class CreateActivityDescriptionComponent implements OnInit {
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    private fb: FormBuilder,
    private activeRouter: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<CreateActivityDescriptionComponent>
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      Activity: '',
      Description: '',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
