import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IheaderService } from 'src/app/features/tallys/iheader.service';
@Component({
  selector: 'app-two-side-adjustment',
  templateUrl: './two-side-adjustment.component.html',
  styleUrls: ['./two-side-adjustment.component.css'],
})
export class TwoSideAdjustmentComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<TwoSideAdjustmentComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      storer: '0013 Neils Item Storer',
      item: 'AACNDF80823 TEST 123',
      Lots: '',
      Location: '13 DOCK',
      FromBucket: '',
      bol: '',
      Quantity: '',
      Reason: '',
      Available: '1-',
      Held: '',
      Committed: 1,
      User1: '',
      User2: '',
      User3: '',
      User4: '',
      Damaged: '',
      itemTo: 'AACNDF80823',
      toBucket: '',
      toLots: '',
      toLocation: '13 DOCK',
      SortSeq: '',
    });
  }

  twosideAdjustment() {
    console.log(this.form.value);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
