import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assign-lane-order-staging',
  templateUrl: './assign-lane-order-staging.component.html',
  styleUrls: ['./assign-lane-order-staging.component.css'],
})
export class AssignLaneOrderStagingComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AssignLaneOrderStagingComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      BatchNumber: 16,
      Carrier: 'UPGD UPS GROUND',
      TotalWeight: '',
      TotalCubes: '',
      TotalOrders: '',
      TotalStops: '',
      StagingLane: ' ',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  assignLane() {
    alert('assign lane');
  }
}
