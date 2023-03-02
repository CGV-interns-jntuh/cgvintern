import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css'],
})
export class DoorsComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'BldgNumb',
    'DoorNumb',
    'DoorUse',
    'Stat',
    'SpecialAttribute',
  ];
  dataSource: any = [];

  duplicateSource: any = [
    {
      BldgNumb: 1,
      DoorNumb: 'DOOR 1',
      DoorUse: 'B',
      Stat: 'AC',
      SpecialAttribute: '',
    },
    {
      BldgNumb: 1,
      DoorNumb: '1',
      DoorUse: 'B',
      Stat: 'AC',
      SpecialAttribute: '',
    },
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<DoorsComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      BuildingNumber: 1,
      DoorNumber: '',
    });

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }
}
