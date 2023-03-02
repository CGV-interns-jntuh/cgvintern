//import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExtractReportSortClausesCreateComponent } from './extract-report-sort-clauses-create/extract-report-sort-clauses-create.component';
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
interface extractreport{
  ExtractName:String,
    ExtractFile:String,
    OrderBy: String,
    GroupBy: String
}

@Component({
  selector: 'app-extract-report-sort-clauses',
  templateUrl: './extract-report-sort-clauses.component.html',
  styleUrls: ['./extract-report-sort-clauses.component.css']
})
export class ExtractReportSortClausesComponent implements OnInit {

  displayedColumns: string[] = [
    'ExtractName',
    'ExtractFile',
    'OrderBy',
    'GroupBy',
    'Actions'
  ];

  addExtractReportForm: any = this.fb.group({
    ExtractName: [null],
    ExtractFile: [null],
    OrderBy: [null],
    GroupBy: [null]
  });

  searchTextDisplay = false;
  dataSource: extractreport[] = [
    {
      ExtractName:'ITEMAGE',
      ExtractFile:'ITEMST',
      OrderBy:'ITSTOR,ITEM',
      GroupBy:''
    },
    {
      ExtractName:'ITEMBAL',
      ExtractFile:'ITEMST',
      OrderBy:'ITSTOR,ITEM',
      GroupBy:''
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private matDialog: MatDialog
  ) {}

  addExtractReport() {
    this.router.navigateByUrl('/main-nav/extractreport/add');
    // this.matDialog.open(CustomerCreateComponent, {
    //   width: '950px',
    //   height: 'auto',
    //   maxHeight: '95vh',
    // });
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
    this.router.navigateByUrl('main-nav/extractreport/update', { state: element });
  }

  ngOnInit(): void {}

}
