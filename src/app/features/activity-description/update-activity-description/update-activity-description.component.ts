import { GlobalComponent } from './../../../Global-Component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-activity-description',
  templateUrl: './update-activity-description.component.html',
  styleUrls: ['./update-activity-description.component.css'],
})
export class UpdateActivityDescriptionComponent implements OnInit {
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    private fb: FormBuilder,
    private activeRouter: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<UpdateActivityDescriptionComponent>
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      Activity: 'AWRG',
      Description: 'Product Putaway',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
