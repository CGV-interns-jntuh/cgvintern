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
  selector: 'app-re-sequence',
  templateUrl: './re-sequence.component.html',
  styleUrls: ['./re-sequence.component.css'],
})
export class ReSequenceComponent implements OnInit {
  displayedColumns: string[] = ['SequenceNumber', 'Location', 'Lot'];

  duplicateSource: any = [
    {
      SequenceNumber: 20200924,
      Location: '13  1  A',
      Lot: '',
    },
    {
      SequenceNumber: 20221031,
      Location: '13  DOCK',
      Lot: '',
    },
  ];

  constructor(
    private activeRouter: ActivatedRoute,
    public iHeaderSvc: IheaderService,
    private router: Router,
    private matDialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ReSequenceComponent>
  ) {}
  @ViewChild('paginator') paginator!: MatPaginator;
  form!: FormGroup;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }
  user = 'NKOHAN';
  building = 13;
  TallyHeaders: any = [];
  id: any;
  postingDate: any;
  result: any;
  dataSource: any = [];

  closeDialog() {
    this.dialogRef.close();
  }
}
