import { AddComponent } from './add/add.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
})
export class FilesComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'LibraryName',
    'FileName',
    'Members',
    'ActiveRecords',
    'DeletedRecords',
    'Space',
    'Actions',
  ];

  dataSource: any = [];

  duplicateSource: any = [
    {
      LibraryName: 'CCBASE',
      FileName: 'ICFLOG',
      Members: 1,
      ActiveRecords: '',
      DeletedRecords: '',
      Space: 57344,
    },
    {
      LibraryName: 'WISCUST',
      FileName: 'UMPUL',
      Members: 1,
      ActiveRecords: 962903,
      DeletedRecords: 3706,
      Space: 34509789,
    },
  ];

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog // @Inject(MAT_DIALOG_DATA) public anyvariable: any, // private dialogRef: MatDialogRef<AttributesComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Library: '',
      File: '',
      Totals: 4,
    });

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  addFile() {
    this.matDialog.open(AddComponent, {
      width: '1000px',
      maxHeight: '90vh',
      autoFocus: false,
    });
  }
  deleteFile() {}
}
