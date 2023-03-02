import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-order-staging',
  templateUrl: './delete-order-staging.component.html',
  styleUrls: ['./delete-order-staging.component.css'],
})
export class DeleteOrderStagingComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteOrderStagingComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      BatchNumber: 17,
      CarrierCode: 'UPGD UPS GROUND',
      StagingLane: ' ',
      BatchStatus: 'PS',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  deleteBatch() {
    if (confirm('Delete')) {
      alert('deleted');
    }
  }
}
