import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { DockScheduleAddComponent } from '../order-staging/work-with-dock-schedular/dock-schedule-add/dock-schedule-add.component';
import { IheaderService } from '../tallys/iheader.service';
import { DockScheduleInfoComponent } from './dock-schedule-info/dock-schedule-info.component';
import { DockScheduleMarkHotComponent } from './dock-schedule-mark-hot/dock-schedule-mark-hot.component';
import { DockScheduleUpdateComponent } from './dock-schedule-update/dock-schedule-update.component';

@Component({
  selector: 'app-dock-schedule',
  templateUrl: './dock-schedule.component.html',
  styleUrls: ['./dock-schedule.component.css']
})
export class DockScheduleComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Storer Number',
    'Appt Date',
    'Appt Time',
    'Appt Type',
    'Bldg',
    'Reference',
    'Sts',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      StorerNumber:'13',
      ApptDate:'12/28/22',
      ApptTime:'13:00',
      ApptType:'O',
      Bldg:'13',
      Reference:'Node Tst',
      Sts:'EN'

    },

    {
      StorerNumber:'13',
      ApptDate:'12/29/22',
      ApptTime:'12:00',
      ApptType:'I',
      Bldg:'13',
      Reference:'Node Test 2',
      Sts:'EN'

    },

    {
      StorerNumber:'1301',
      ApptDate:'12/28/22',
      ApptTime:'8:00',
      ApptType:'O',
      Bldg:'13',
      Reference:'Node Test 3',
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
      Reference:'',
      Date:'',
      InOut:'',
      Storer:'',
      Building:'',
      Carrier:''

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

  changeDocScheduler()
  {
   this.matDialog.open(DockScheduleUpdateComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  docInfo()
  {
   this.matDialog.open(DockScheduleInfoComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  dockScheduleMarkHot()
  {
   this.matDialog.open(DockScheduleMarkHotComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }


}
