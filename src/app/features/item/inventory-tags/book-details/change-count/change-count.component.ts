import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-count',
  templateUrl: './change-count.component.html',
  styleUrls: ['./change-count.component.css'],
})
export class ChangeCountComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['Team', 'Condition', 'Location', 'Quantity'];
  dataSource: any = [];

  duplicateSource: any = [
    {
      Team: 'Book',
      Condition: 'A',
      Location: '612 DOCK',
      Quantity: 10,
    },
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<ChangeCountComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      SerialLP: '612DP004790481',
      Item: 300,
      Lots: '02162018',
    });

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
