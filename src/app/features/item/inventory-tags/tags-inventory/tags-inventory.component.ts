import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';
//import { IheaderService } from '../../tallys/iheader.service';
@Component({
  selector: 'app-tags-inventory',
  templateUrl: './tags-inventory.component.html',
  styleUrls: ['./tags-inventory.component.css'],
})
export class TagsInventoryComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'TagNumber',
    'Qty',
    'TP',
    'Item',
    'LotCodes',
    'Aisle',
    'Slot',
    'St',
  ];
  dataSource: any = [];

  duplicateSource: any = [
    {
      TagNumber: 1,
      Qty: '',
      TP: '',
      Item: '* No Counts Reported',
      LotCodes: '',
      Aisle: '',
      Slot: '',
      St: '',
    },
    {
      TagNumber: 2,
      Qty: '',
      TP: '',
      Item: '* No Counts Reported',
      LotCodes: '',
      Aisle: '',
      Slot: '',
      St: '',
    },
  ];

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<TagsInventoryComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      TagNumber: '',
      Team: '',
      DifferencesOnly: 'N',
      Voids: 'Y',
      IncludeNoCounts: 'Y',
      BookLines: 50001,
      BookQuantity: '',
    });

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
