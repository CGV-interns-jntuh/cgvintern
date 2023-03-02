import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';
//import { IheaderService } from '../../tallys/iheader.service';
import { ChangeCountComponent } from './change-count/change-count.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['SerialLPNumber', 'Item', 'Lots', 'Actions'];
  dataSource: any = [];

  duplicateSource: any = [
    {
      SerialLPNumber: '612DP004790481',
      Item: 300,
      Lots: 12102018,
    },
    {
      SerialLPNumber: '612DP0047904810001',
      Item: 400,
      Lots: 12102018,
    },
  ];

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<BookDetailsComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      SerialLP: '',
      NotFound: '',
      ConditionChange: '',
      Location: '',
      Recounts: '',
      Relocations: '',
    });

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog() {
    this.dialogRef.close();
  }
  changeCount() {
    this.matDialog.open(ChangeCountComponent, {
      width: '5000px',
      maxHeight: '90vh',
      // 'data': element,
      autoFocus: false,
    });
  }
}
