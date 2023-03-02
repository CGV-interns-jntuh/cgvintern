import { SynopsisComponent } from './synopsis/synopsis.component';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ltl-batch-details',
  templateUrl: './ltl-batch-details.component.html',
  styleUrls: ['./ltl-batch-details.component.css'],
})
export class LtlBatchDetailsComponent implements OnInit {
  form!: FormGroup;

  displayedColumns: string[] = [
    'Shipment Number',
    'Customer',
    'Scheduled Ship Date',
    'Must Del By Date',
    'AP',
    'Weight',
    'City',
    'St',
    'Action',
  ];

  dataSource: any = [];

  duplicateSource: any = [
    {
      ShipmentNumber: '2',
      Customer: '9849',
      ScheduledShipDate: '08/26/21',
      MustDelByDate: '06/26/16',
      AP: 'Y',
      Weight: '23646',
      City: 'Columbus',
      ST: 'OH',
    },
  ];

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private matDialog: MatDialog,

    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<LtlBatchDetailsComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      BatchNumber: '',
      Customer: '',
    });

    this.dataSource = this.duplicateSource;
  }

  closeDialog() {
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
  synopsis(element: any) {
    this.matDialog.open(SynopsisComponent, {
      width: '1000px',
      maxHeight: '80vh',
      data: element,
      autoFocus: false,
    });
  }
  delete() {
    alert('deleted');
  }
}
