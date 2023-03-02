import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { LtlBatchChangeComponent } from './ltl-batch-change/ltl-batch-change.component';
import { LtlBatchDetailsComponent } from './ltl-batch-details/ltl-batch-details.component';

@Component({
  selector: 'app-ltl-batches',
  templateUrl: './ltl-batches.component.html',
  styleUrls: ['./ltl-batches.component.css']
})
export class LtlBatchesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Batch Number',
    'SCAC Code',
    'Number of Shipments',
    'Scheduled Ship Date',
    'Changed By',
    'Status',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      BatchNumber:'2',
      SCACCode:'RDXY',
      NumberofShipments:'1',
      ScheduledShipDate:'08/21/22',
      ChangedBy:'KPAVER',
      Status:'PR'

    },

    {
      BatchNumber:'1',
      SCACCode:'SXTY',
      NumberofShipments:'1',
      ScheduledShipDate:'06/23/16',
      ChangedBy:'DWHITE',
      Status:'PR'

    }
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      BatchNumber:''

    })

    this.dataSource = this.duplicateSource;
  }


 changeBatch(element:any)
  {
   this.matDialog.open(LtlBatchChangeComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "data": element,
      "autoFocus": false
    });
  }

  detailsbatch(element:any)
  {
   this.matDialog.open(LtlBatchDetailsComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }


}
