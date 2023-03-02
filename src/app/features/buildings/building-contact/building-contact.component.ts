import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-building-contact',
  templateUrl: './building-contact.component.html',
  styleUrls: ['./building-contact.component.css'],
})
export class BuildingContactComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['Type', 'ContactName', 'Telephone', 'Status'];
  dataSource: any = [];

  duplicateSource: any = [
    {
      Type: 'INVEMAIL',
      ContactName: 'kpaver',
      Telephone: null,
      Status: 'AC',
    },
    {
      Type: 'RCVTALLY',
      ContactName: 'kpaver',
      Telephone: null,
      Status: 'AC',
    },
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<BuildingContactComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      ContactType: '',
      Name: '',
      Status: 'AC',
    });

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }
}
