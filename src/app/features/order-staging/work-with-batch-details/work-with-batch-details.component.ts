import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { AppointmentEntryComponent } from './appointment-entry/appointment-entry.component';
import { BillSynopsisComponent } from './bill-synopsis/bill-synopsis.component';
import { EventHistoryComponent } from './event-history/event-history.component';
import { ShipConfirmComponent } from './ship-confirm/ship-confirm.component';
import { ShortShipComponent } from './short-ship/short-ship.component';
import { UserEventComponent } from './user-event/user-event.component';

@Component({
  selector: 'app-work-with-batch-details',
  templateUrl: './work-with-batch-details.component.html',
  styleUrls: ['./work-with-batch-details.component.css']
})
export class WorkWithBatchDetailsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Bill Number',
    'ST',
    'Lane/Pos',
    'Consignee',
    'ScheduledShipDate',
    'Cubes',
    'Weight',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      BillNumber:'4785732',
      ST:'PS',
      LanePos:'',
      Consignee:'DOL120129330',
      ScheduledShipDate:'03/07/18',
      Cubes:'',
      Weight:'22384.90'
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
      BatchNo:'14',
      Carrier:''
     
    })

    this.dataSource = this.duplicateSource;
  }


  shipConfirm()
  {
    this.matDialog.open(ShipConfirmComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  billSynopsis()
  {
    this.matDialog.open(BillSynopsisComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  eventHistory()
  {
    this.matDialog.open(EventHistoryComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  appointmentEntry()
  {
    this.matDialog.open(AppointmentEntryComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

    userEventEntry()
  {
    this.matDialog.open(UserEventComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  
  shortShip()
  {
    this.matDialog.open(ShortShipComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  

}
