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
  selector: 'app-side-adjustment',
  templateUrl: './side-adjustment.component.html',
  styleUrls: ['./side-adjustment.component.css'],
})
export class SideAdjustmentComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<SideAdjustmentComponent>
  ) {}

  ngOnInit(): void {
    console.log(this.anyvariable);
    this.form = this.fb.group({
      storer: '0013 Neils Item Storer',
      item: 'CPBKLT1 SAMPLE DSP1 BOOKLET',
      Lots: '',
      Location: '13 1/A',
      AdjustmentBucket: 'A',
      Quantity: '',
      ReasonCode: '',
      referTo: '',
      Number: '',
      Line: '',
      Available: 105,
      Held: '',
      Committed: 1,
      User1: '',
      User2: '',
      User3: '',
      User4: '',
      Damaged: '',
    });
  }

  sideAdjustment() {
    console.log(this.form.value);
  }

  closeDialog() {
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
