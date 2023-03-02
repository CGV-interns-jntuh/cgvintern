import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { AuditHeadersChangeComponent } from './audit-headers-change/audit-headers-change.component';
import { AuditHeadersCommentsComponent } from './audit-headers-comments/audit-headers-comments.component';
import { AuditHeadersStatusComponent } from './audit-headers-status/audit-headers-status.component';

@Component({
  selector: 'app-audit-headers',
  templateUrl: './audit-headers.component.html',
  styleUrls: ['./audit-headers.component.css']
})
export class AuditHeadersComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Load_Number',
    'Reference_Number',
    'EstimatedCosts',
    'InvoicedCosts',
    'ApprovedCosts',
    'ST',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      Load_Number:1,
      Reference_Number:'TEST',
      EstimatedCosts:'',
      InvoicedCosts:'',
      ApprovedCosts:'',
      ST:'EN',
     

      
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
      Load_Number:'',
      Reference:'',
      Status:'',
      Entry_User:'',
      Entry_Date:'',
     
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

  auditHeadersChangesForm(element:any){
    this.matDialog.open(AuditHeadersChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }
  
  auditHeadersCommentsForm(element:any){
    this.matDialog.open(AuditHeadersCommentsComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }
  
  auditHeadersStatusForm(element:any){
    this.matDialog.open(AuditHeadersStatusComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }
addAttribute(){

}

}
