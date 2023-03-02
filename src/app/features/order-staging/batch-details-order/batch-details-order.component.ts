import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batch-details-order',
  templateUrl: './batch-details-order.component.html',
  styleUrls: ['./batch-details-order.component.css'],
})
export class BatchDetailsOrderComponent implements OnInit {
  form!: FormGroup;

  displayedColumns: string[] = [
    'BillNumber',
    'St',
    'LansPos',
    'Consignee',
    'ScheduledShipDate',
    'Cubes',
    'Weight',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}
  dataSource: any = [];

  duplicateSource: any = [
    {
      BillNumber: '',
      St: '',
      LansPos: '',
      Consignee: '',
      ScheduledShipDate: '',
      Cubes: '',
      Weight: '',
    },
  ];

  ngOnInit(): void {
    this.form = this.fb.group({
      BatchNumber: 16,
      Carrier: 'UPGD UPS GROUND',
    });
    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }
}
