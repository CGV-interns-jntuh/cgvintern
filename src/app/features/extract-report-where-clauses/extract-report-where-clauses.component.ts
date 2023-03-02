//import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExtractReportWhereClausesCreateComponent } from './extract-report-where-clauses-create/extract-report-where-clauses-create.component';
//import { TallyDetailCommentsComponent } from './tally-detail-comments/tally-detail-comments.component';
//import { MaintainComponent } from './maintain/maintain.component';
//import { FormBuilder, Validators } from '@angular/forms';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
//import { IheaderService } from './iheader.service';
//import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
//import { CommentsComponent } from './comments/comments.component';
//import { TallyPostingComponent } from './tally-posting/tally-posting.component';
//import { UpdateComponent } from './update/update.component';
//import { TallyDetailWorkComponent } from './tally-detail-work/tally-detail-work.component';
//import { TallyInquiryComponent } from './tally-inquiry/tally-inquiry.component';
//import { TallyEventComponent } from './tally-event/tally-event.component';
//import { TallyDetailDeleteComponent } from './tally-detail-delete/tally-detail-delete.component';
//import { TallyDetailUpdateComponent } from './tally-detail-update/tally-detail-update.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TallyData } from '../tally-data';
import { GlobalComponent } from 'src/app/Global-Component';
import { Router } from '@angular/router';

interface extractreportwhere{
  ExtractName:String,
  FileName:String,
  WhereClause: String,
    
}

@Component({
  selector: 'app-extract-report-where-clauses',
  templateUrl: './extract-report-where-clauses.component.html',
  styleUrls: ['./extract-report-where-clauses.component.css']
})
export class ExtractReportWhereClausesComponent implements OnInit {

  displayedColumns: string[] = [
    'ExtractName',
    'FileName',
    'WhereClause',
    'Actions'
  ];

  addExtractReportWhereForm: any = this.fb.group({
    ExtractName: [null],
    ExtractFile: [null],
    WhereClause: [null]
  });

  searchTextDisplay = false;
  dataSource: extractreportwhere[] = [
    {
      ExtractName:'ACTIVITY',
      FileName:'SACTWF',
      WhereClause:'SASTOR = {STORER}'
      
    },
    {
      ExtractName:'ACTIVITYDR',
      FileName:'SACTWF',
      WhereClause:'SASTOR = {STORER}'
      
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private matDialog: MatDialog
  ) {}

  addExtractReportWhere() {
    this.router.navigateByUrl('/main-nav/extractreportwhere/add');
    // this.matDialog.open(CustomerCreateComponent, {
    //   width: '950px',
    //   height: 'auto',
    //   maxHeight: '95vh',
    // });
  }

  getUpdateWhereForm(element: any) {
    //console.log("***********  "+tally);
    // console.log('elemendt Id :' + element['IHTALY']);
    // this.matDialog.open(UpdateComponent, {
    //   width: '950px',
    //   height: 'auto',
    //   maxHeight: '95vh',
    //   data: element,
    //   autoFocus: false,
    // });
    this.router.navigateByUrl('main-nav/extractreportwhere/update', { state: element });
  }

  ngOnInit(): void {}

}
