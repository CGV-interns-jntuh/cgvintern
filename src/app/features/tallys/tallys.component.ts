import { TallyDetailCommentsComponent } from './tally-detail-comments/tally-detail-comments.component';
import { MaintainComponent } from './maintain/maintain.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { IheaderService } from './iheader.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from './comments/comments.component';
import { TallyPostingComponent } from './tally-posting/tally-posting.component';
import { UpdateComponent } from './update/update.component';
import { TallyDetailWorkComponent } from './tally-detail-work/tally-detail-work.component';
import { TallyInquiryComponent } from './tally-inquiry/tally-inquiry.component';
import { TallyEventComponent } from './tally-event/tally-event.component';
import { TallyDetailDeleteComponent } from './tally-detail-delete/tally-detail-delete.component';
import { TallyDetailUpdateComponent } from './tally-detail-update/tally-detail-update.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TallyData } from '../tally-data';
import { GlobalComponent } from 'src/app/Global-Component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tallys',
  templateUrl: './tallys.component.html',
  styleUrls: ['./tallys.component.css'],
})
export class TallysComponent implements OnInit {
  displayedColumns: string[] = [
    'Tally',
    'Invoice',
    'Storer',
    'ScheduleArrival',
    'ActualArrival',
    'StorerRefNo.',
    'ProNo.',
    'Carrier',
    'Actions',
  ];

  searchText: any;

  updateForm = this.fb.group({
    tally: [null],
    // storer: [
    //   '',
    //   [
    //     Validators.required,
    //     Validators.min(0),
    //     Validators.pattern('[0-9]{1,10}'),
    //   ],
    // ],
    storer: [null],
    storerRef: [null],
    loadType: [null],
    recptType: [null],
    recvdFrom: [null],
    qty: [
      '',
      [
        Validators.required,
        Validators.min(0),
        Validators.pattern('[0-9]{1,10}'),
      ],
    ],
    schdldArrival: [null],
    carrier: [null],
    actualArrival: [null],
    scdldTime: [null],
    actualTime: [null],
    wgt: [null],
    pro: [null],
    invoice: [null],
  });

  result: any = [];
  dataSource: any = [];
  duplicateSource: any = [];
  singleTallyData = [];
  documents = [];
  user: any;
  building: any;

  //  user = localStorage.getItem('userName');
  // building = localStorage.getItem('building');

  tally: any;
  searchValue: string = '';
  condition: boolean = true;
  prevText: string = '';
  TALLY_DATA: TallyData = [];
  loggedUser: any;
  searchTextDisplay = false;

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}
  TallyHeaders: any = [];
  id: number = 0;
  @ViewChild('paginator') paginator!: MatPaginator;

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem('LoggedIn');

    if (localStorage.getItem('LoggedIn')) {
      this.user = localStorage.getItem('userName');
      this.building = localStorage.getItem('building');
    } else {
      this.user = GlobalComponent.user;
      this.building = GlobalComponent.building;
    }
    this.TallyHeaders = this.iHeaderSvc
      .getAll(this.user, this.building)
      .subscribe((data) => {
        this.result = data;
        this.TallyHeaders = data;
        console.log(data);
        var res = this.result[0].data[1]?.value;
        console.log(res);

        var parsedData = JSON.parse(res);

        //this.dataSource = parsedData.returnedData;
        this.duplicateSource = parsedData.returnedData;
        console.log(this.duplicateSource);

        this.dataSource = new MatTableDataSource(this.duplicateSource);
        this.dataSource.paginator = this.paginator;
      });
  }

  comment(tally: any) {
    console.log(tally);
    this.result = this.iHeaderSvc.getComment(tally).subscribe((data: any) => {
      console.log(data);
      this.result = data;
      // this.id= this.result.tallyNumber
      // console.log();
      // this.router.navigate(['tallys/comments',tally]);
      this.matDialog.open(CommentsComponent, {
        width: '1000px',
        maxHeight: '80vh',
        data: tally,
        autoFocus: false,
      });
    });
    console.log(' Data :' + this.result);
    //
    // alert('Comment added  '+tally);
  }

  tallyDetailsComment(tally: any) {
    console.log(tally);
    this.result = this.iHeaderSvc
      .getTallyDetailComment(tally)
      .subscribe((data: any) => {
        console.log(data);
        this.result = data;

        this.matDialog.open(TallyDetailCommentsComponent, {
          width: '1000px',
          maxHeight: '80vh',
          data: tally,
          autoFocus: false,
        });
      });
  }

  tallyPosting(tally: any) {
    // this.router.navigate(['tallys/posting',tally]);
    this.matDialog.open(TallyPostingComponent, {
      width: '1110px',
      maxHeight: '105vh',
      data: tally,
      autoFocus: false,
    });
  }

  tallyEvent(tally: any) {
    // this.router.navigate(['tallys/posting',tally]);
    this.matDialog.open(TallyEventComponent, {
      width: '1350px',
      maxHeight: '350vh',
      data: tally,
      autoFocus: false,
    });
  }

  storer() {
    this.router.navigate(['tallys/storer']);
    // this.matDialog.open(TallyEventComponent, {
    //   width: '1350px',
    //   maxHeight: '350vh',
    //   data: tally,
    //   autoFocus: false,
    // });
  }

  tallyDetailDelete(tally: any) {
    /*this.result = this.iHeaderSvc
      .deleteTally(tally, this.user)
      .subscribe((data: any) => {
        this.result = data;
      });
    alert('Record deleted successfully.');*/

    this.matDialog.open(TallyDetailDeleteComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: tally,
      autoFocus: false,
    });
  }

  tallyDetailUpdate(tally: any) {
    this.matDialog.open(TallyDetailUpdateComponent, {
      width: '1250px',
      maxHeight: '180vh',

      data: tally,
      autoFocus: false,
    });
  }

  getTallyBySearch(tally: any) {
    // this.duplicateSource = this.dataSource;
    var tal: any = [];
    console.log('TALLY NO :' + tally.tally);

    if (tally.tally == '') {
      tal = this.duplicateSource;
    } else {
      this.duplicateSource.forEach((element: any) => {
        console.log('*******  ******' + element);

        if (element['IHTALY'] == tally.tally) {
          tal.push(element);
          //  console.log('single');
          // console.log(this.singleTallyData);
        }
      });
    }

    this.dataSource = tal;
    console.log('S DADA');
    console.log(this.dataSource);

    // this.iHeaderSvc.getAll(this.user, tally.tally).subscribe((data) => {
    //   this.result = data;
    //   console.log(data.data);
    //   console.log("DATA :"+this.result);
    //     this.TallyHeaders = data;
    //     var res = this.result[0].data[1]?.value;
    //     var parsedData = JSON.parse(res);
    //     console.log(parsedData);
    //     this.dataSource = parsedData.returnedData;
    //    console.log("Result : "+this.dataSource);
    //    //this.router.navigate(['tallys/update',this.tallyId]);

    // });
  }

  getTallyBySearch2(tally: any) {
    var tal: any = [];
    this.TallyHeaders = this.iHeaderSvc
      .getByTally(this.user, tally.tally)
      .subscribe((data) => {
        this.result = data;
        this.TallyHeaders = data;
        console.log(this.TallyHeaders);
        var res = this.result[0].data[1]?.value;
        console.log(res);
        var parsedData = JSON.parse(res);
        console.log(parsedData);
        // this.dataSource = parsedData.returnedData;
        this.dataSource = new MatTableDataSource(parsedData.returnedData);
        console.log('Result : ' + this.dataSource);
        console.log('DaTA');
        console.log(tal);
        //console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
      });
  }

  getUpdateForm(element: any) {
    //console.log("***********  "+tally);
    // console.log('elemendt Id :' + element['IHTALY']);
    // this.matDialog.open(UpdateComponent, {
    //   width: '950px',
    //   height: 'auto',
    //   maxHeight: '95vh',
    //   data: element,
    //   autoFocus: false,
    // });
    this.router.navigateByUrl('/main-nav/tallys/update', { state: element });
  }

  inquiry(tally: any) {
    // this.router.navigate(['tallys/posting',tally]);
    this.matDialog.open(TallyInquiryComponent, {
      width: '1000px',
      maxHeight: '80vh',
      data: tally,
      autoFocus: false,
    });
  }

  tallyDetailsCreate() {
    this.matDialog.open(MaintainComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }

  tallyDetails(element: any) {
    this.router.navigate(['/main-nav/tallys/details', element]);
    // this.matDialog.open(TallyDetailWorkComponent, {
    //   width: '950px',
    //   height: 'auto',
    //   maxHeight: '95vh',
    //   data: element,
    //   autoFocus: false,
    // });
  }

  update(tally: any) {
    console.log(tally);
    this.result = this.iHeaderSvc.getComment(tally).subscribe((data: any) => {
      console.log(data);
      this.result = data;
      // this.id= this.result.tallyNumber
      // console.log();
      this.router.navigate(['tallys/comments', tally]);
    });
    console.log(' Data :' + this.result);
    //
    // alert('Comment added  '+tally);
  }

  // updateTally(tallyId: any) {
  //   var res = this.updateForm.value;
  //   this.result = this.iHeaderSvc
  //     .updateTally(
  //       res.tally,
  //       res.storer,
  //       res.storerRef,
  //       res.loadType,
  //       res.recptType,
  //       res.recvdFrom,
  //       res.qty,
  //       res.schdldArrival,
  //       res.carrier,
  //       res.actualArrival,
  //       this.building,
  //       res.pro,
  //       res.wgt,
  //       res.scdldTime,
  //       res.actualTime,
  //       this.user
  //     )
  //     .subscribe((data) => {
  //       this.result = data;
  //     });
  //   alert('Data updated successfully');
  // }

  onBack() {
    this.router.navigate(['tally/details']);
  }

  onSubmit(event: any) {
    this.condition = true;
    this.prevText = this.searchValue;
  }

  handleClick(event: Event) {
    const { target } = event;
    console.log(target);
  }

  addTally() {
    this.router.navigate(['/main-nav/tallys/add']);
  }

  searchTally() {
    if (this.searchTextDisplay == true) this.searchTextDisplay = false;
    else this.searchTextDisplay = true;
  }
  result1: any;
  tallyId: any;
  getTally(tally: any) {
    //
    console.log(tally);

    this.iHeaderSvc.getByTally(this.user, tally).subscribe((data) => {
      this.result1 = data;
      this.tallyId = this.result1.tallyNumber;
      console.log('******  :' + this.tallyId);
      this.router.navigate(['tallys/update', this.tallyId]);
    });
  }

  delete(tally: any) {
    this.result = this.iHeaderSvc
      .deleteTally(tally, this.user)
      .subscribe((data: any) => {
        this.result = data;
        console.log(this.result);

        if (JSON.parse(this.result[0].data[1].value).success) {
          //alert('Record Created SuccessFully');
          const msg = JSON.parse(this.result[0].data[1].value).returnedData
            .message;
          this.successMessage(msg);
          //this. getTallyBySearch2(tally-1);
          // this.router.navigate(['/main-nav/tallys/read']);
        } else {
          const msg = JSON.parse(this.result[0].data[1].value).returnedData
            .message;
          this.failureMessage(msg);
        }
      });
    //alert('Record deleted successfully.');
  }

  successMessage(msg: any) {
    Swal.fire(msg, '', 'success');
    this.router.navigate(['/main-nav']);
    // this.router.navigate(['/main-nav/tallys/read']);
  }

  failureMessage(msg: any) {
    Swal.fire(msg, '', 'error');
    // this.router.navigate(['/main-nav/tallys/read']);
  }

  // getCommnet(tally: any) {
  //   this.result = this.iHeaderSvc
  //     .getComment(tally)
  //     .subscribe((data: any) => {
  //       this.result = data;
  //     });
  //     console.log(this.result);
  //   alert('Record deleted successfully.');
  // }

  // onTallyClick(tally: { Id: any }) {
  //   this.router.navigate(['tallys/view', tally.Id]);
  // }
}
function getTallyBySearch2() {
  throw new Error('Function not implemented.');
}
