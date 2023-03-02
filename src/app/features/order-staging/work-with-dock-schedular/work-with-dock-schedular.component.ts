import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { DockScheduleAddComponent } from './dock-schedule-add/dock-schedule-add.component';

@Component({
  selector: 'app-work-with-dock-schedular',
  templateUrl: './work-with-dock-schedular.component.html',
  styleUrls: ['./work-with-dock-schedular.component.css']
})
export class WorkWithDockSchedularComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Appt#',
    'I/O',
    'ApTy',
    'LT',
    'LP',
    'SCAC',
    'Bldg',
    'App',
    'Date',
    'Time',
    'Load/Batch',
    'Door',
    'Pri',
    'Sts',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Appt:'2511',
      IO:'OUT',
      ApTy:'TR',
      LT:'P',
      LP:'',
      SCAC:'AIRB',
      Bldg:'100',
      App:'',
      Date:'',
      Time:'',
      LoadBatch:'14',
      Door:'',
      Pri:'',
      Sts:'EN'

      
    },
    


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
      Date:'',
      SCAC:'',
      BldgDr:'',
      InOut:'',
      Open:'',
      Appt:'',
      ApptType:'',
      LoadType:'',
      Status:'',
      PO:'',
      Ref:'',
      Acct:'',
      Priority:'',
      Document:'14',
      Type:'B'
    })

    this.dataSource = this.duplicateSource;
  }


  addDocScheduler()
  {
    this.matDialog.open(DockScheduleAddComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  // moveHistory()
  // {
  //   this.matDialog.open(MoveHistoryComponent, {
  //     "width": '1000px',
  //     "maxHeight": '50vh',
  //     "autoFocus": false
  //   });
  // }
}
