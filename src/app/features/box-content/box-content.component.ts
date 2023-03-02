import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { BoxContentAddPressHoldComponent } from './box-content-add-press-hold/box-content-add-press-hold.component';
import { BoxContentChangeComponent } from './box-content-change/box-content-change.component';
import { BoxContentDeactiveComponent } from './box-content-deactive/box-content-deactive.component';
import { BoxContentDeleteComponent } from './box-content-delete/box-content-delete.component';
import { BoxContentEventHistoryInquiryComponent } from './box-content-event-history-inquiry/box-content-event-history-inquiry.component';
import { BoxContentInquiryComponent } from './box-content-inquiry/box-content-inquiry.component';
import { BoxContentItemActivityComponent } from './box-content-item-activity/box-content-item-activity.component';
import { BoxContentItemLabelComponent } from './box-content-item-label/box-content-item-label.component';
import { BoxContentRemovePressHoldComponent } from './box-content-remove-press-hold/box-content-remove-press-hold.component';

@Component({
  selector: 'app-box-content',
  templateUrl: './box-content.component.html',
  styleUrls: ['./box-content.component.css']
})
export class BoxContentComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'content',
    'identifier',
    'boxNumber',
    'fileType',
    'sts',
    'opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      content:'ITEM A',
      identifier:'A',
      boxNumber:'0420201601',
      fileType:'',
      sts:'COM',
      
     

      
    },
    {
      content:'ITEM A',
      identifier:'',
      boxNumber:'772297140780',
      fileType:'XXX',
      sts:'',
      
     

      
    },
    {
      content:'ITEM B',
      identifier:'',
      boxNumber:'772297140780',
      fileType:'ABC',
      sts:'COM',
      
     

      
    },
   
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    // @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    // private dialogRef: MatDialogRef<AttributesComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      contentID:'',
      customer:'',
      assetID:'',
      clientId:'',
      xReference:'',
      status:' ',
      onlyActive:'Y'
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
  }

  // BatchFileAddForm(){
  //   this.matDialog.open(AuditHeadersChangesComponent, {
  //     "width": '5000px',
  //     "maxHeight": '90vh',
  //    // 'data': element,
  //     "autoFocus": false
  //   });

  // }

  BoxContentsChangeForm(element:any){
    this.matDialog.open(BoxContentChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }
  
  BoxContentsDeactiveForm(element:any){
    this.matDialog.open(BoxContentDeactiveComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }
  
  
  BoxContentItemActivityForm(element:any){
    this.matDialog.open(BoxContentItemActivityComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  BoxContentItemLabelForm(element:any){
    this.matDialog.open(BoxContentItemLabelComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  BoxContentDeleteForm(element:any){
    this.matDialog.open(BoxContentDeleteComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  BoxContentAddPressHold(element:any){
    this.matDialog.open(BoxContentAddPressHoldComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  BoxContentRemovePressHold(element:any){
    this.matDialog.open(BoxContentRemovePressHoldComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  BoxContentEventHistoryInquiry(element:any){
    this.matDialog.open(BoxContentEventHistoryInquiryComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  BoxContentInquiry(element:any){
    this.matDialog.open(BoxContentInquiryComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  addAttribute(){

}


}
