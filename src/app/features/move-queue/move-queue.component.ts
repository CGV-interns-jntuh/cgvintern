import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { MoveChangeQueuePriorityComponent } from './move-change-queue-priority/move-change-queue-priority.component';
import { MoveChangeStagingLocationComponent } from './move-change-staging-location/move-change-staging-location.component';
import { MoveQueueChangeComponent } from './move-queue-change/move-queue-change.component';
import { MoveQueueCompleteComponent } from './move-queue-complete/move-queue-complete.component';
import { MoveQueueEntryAssignComponent } from './move-queue-entry-assign/move-queue-entry-assign.component';
import { MoveQueueEntryInquiryComponent } from './move-queue-entry-inquiry/move-queue-entry-inquiry.component';
import { MoveQueueNoPickComponent } from './move-queue-no-pick/move-queue-no-pick.component';

@Component({
  selector: 'app-move-queue',
  templateUrl: './move-queue.component.html',
  styleUrls: ['./move-queue.component.css']
})
export class MoveQueueComponent implements OnInit {

  displayedColumns: string[] = [
    'Pr',
    'Item/Desctiption',
    'Quantity',
    'I',
    'From',
    'To',
    'Actions',
  ];

  searchText: any;

  updateForm = this.fb.group({
    storer: [
      '',
      [
        Validators.required,
        Validators.min(0),
        Validators.pattern('[0-9]{1,10}'),
      ],
    ],
    building: [null],
    priority: [null],
    document: [null],
    from: [null],
    oper: [null],
    type: [null],
    item: [null],
  to: [null],
    sts: [null],
  });

  result: any = [];
  dataSource = [];
  duplicateSource = [];
  singleTallyData = [];
  documents = [];
  user = 'NKOHAN';
  building = 13;
  tally: any;
  searchValue: string = '';
  condition: boolean = true;
  prevText: string = '';
  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}
  TallyHeaders: any = [];
  id: number = 0;
  ngOnInit(): void {
    this.TallyHeaders = this.iHeaderSvc
      .getAll(this.user, this.building)
      .subscribe((data) => {
        this.result = data;
        this.TallyHeaders = data;
        console.log(data);
        var res = this.result[0].data[1]?.value;
        console.log(res);

        var parsedData = JSON.parse(res);
        this.dataSource = parsedData.returnedData;
        this.duplicateSource = this.dataSource;
        console.log(this.dataSource);
      });
  }

  moveQueueChange(tally: any) {
    this.matDialog.open(MoveQueueChangeComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: tally,
      autoFocus: false,
    });
  }

  moveQueueComplete(move: any) {
    this.matDialog.open(MoveQueueCompleteComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: move,
      autoFocus: false,
    });
  }

  moveQueueEntryAssign(move: any) {
    this.matDialog.open(MoveQueueEntryAssignComponent, {
      width: '1500px',
      maxHeight: '80vh',

      data: move,
      autoFocus: false,
    });
  }

  moveQueueEntryInquiry(move: any) {
    this.matDialog.open(MoveQueueEntryInquiryComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: move,
      autoFocus: false,
    });
  }

  moveChangeStagingLocation(move: any) {
    this.matDialog.open(MoveChangeStagingLocationComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: move,
      autoFocus: false,
    });
  }

  moveQueueNoPick(move: any) {
   // this.router.navigate(['storer/contacts', storer]);
    this.matDialog.open(MoveQueueNoPickComponent, {
      "width": '1000px',
      "maxHeight": '80vh',

      "data": move,
      "autoFocus": false
    });
  }

  moveChangeQueuePriority(move: any) {
    this.matDialog.open(MoveChangeQueuePriorityComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: move,
      autoFocus: false,
    });
  }

  moveQueueDelete(move: any) {
    // this.matDialog.open(MoveChangeQueuePriorityComponent, {
    //   width: '1000px',
    //   maxHeight: '80vh',

    //   data: move,
    //   autoFocus: false,
    // });
  }

}
