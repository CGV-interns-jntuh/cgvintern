import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';
//import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-control-groups-inventory-tags',
  templateUrl: './control-groups-inventory-tags.component.html',
  styleUrls: ['./control-groups-inventory-tags.component.css'],
})
export class ControlGroupsInventoryTagsComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'ControlNumber',
    'TeamName',
    'StartingTag',
    'EndingTag',
    'Storer',
    'BuildingNumber',
    'Floor',
    'Status',
  ];
  dataSource: any = [];

  duplicateSource: any = [
    {
      ControlNumber: 1,
      TeamName: 'A',
      StartingTag: '',
      EndingTag: '',
      Storer: 100,
      BuildingNumber: 100,
      Floor: '',
      Status: 'EN',
    },
  ];

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<ControlGroupsInventoryTagsComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      ControlNumber: '',
    });

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
