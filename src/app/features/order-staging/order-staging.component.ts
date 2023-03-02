import { AssignLaneOrderStagingComponent } from './assign-lane-order-staging/assign-lane-order-staging.component';
import { DeleteOrderStagingComponent } from './delete-order-staging/delete-order-staging.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalComponent } from 'src/app/Global-Component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MoveHistoryComponent } from './move-history/move-history.component';

@Component({
  selector: 'app-order-staging',
  templateUrl: './order-staging.component.html',
  styleUrls: ['./order-staging.component.css'],
})
export class OrderStagingComponent implements OnInit {
  form!: FormGroup;

  displayedColumns: string[] = [
    'BatchStatus',
    'P',
    'BatchNumber',
    'Storer',
    'CarrierGroup',
    'StagingLane',
    'TotalOrders',
    'TotalQuantity',
    'TotalWeight',
    'Actions'
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
      BatchStatus: 'PS',
      P: 'Y',
      BatchNumber: 17,
      Storer: 1301,
      CarrierGroup: 'UPGD',
      StagingLane: '',
      TotalOrders: 5,
      TotalQuantity: 5,
      TotalWeight: 110.0,
    },
    {
      BatchStatus: 'SG',
      P: 'Y',
      BatchNumber: 16,
      Storer: 8508,
      CarrierGroup: 'UPSG',
      StagingLane: 'ST/018',
      TotalOrders: 5,
      TotalQuantity: 8,
      TotalWeight: 23994.9,
    },
  ];

  ngOnInit(): void {
    this.form = this.fb.group({
      BatchNumber: '',
      Storer: '',
      CarrierGroup: '',
      Open: 0,
      Printed: '',
    });
    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  orderStagingDelete() {
    this.matDialog.open(DeleteOrderStagingComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }
  orderStagingAssignLane() {
    this.matDialog.open(AssignLaneOrderStagingComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }

  orderStagingMoveHistory() {
    this.matDialog.open(MoveHistoryComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }

  orderStagingDockSchedule() {
    
    this.router.navigate(['/main-nav/orderStagingBatch/dockSchedule']);
    // this.matDialog.open(AssignLaneOrderStagingComponent, {
    //   width: '1000px',
    //   maxHeight: '80vh',
    //   autoFocus: false,
    // });
  }

  orderStagingBatchDetails() {
    
    this.router.navigate(['/main-nav/orderStagingBatch/batchDetails']);
    
  }

}
