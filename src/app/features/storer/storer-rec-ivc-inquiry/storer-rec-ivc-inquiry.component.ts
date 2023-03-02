import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-rec-ivc-inquiry',
  templateUrl: './storer-rec-ivc-inquiry.component.html',
  styleUrls: ['./storer-rec-ivc-inquiry.component.css']
})
export class StorerRecIvcInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Date',
    'Tally',
    'ReferenceNo',
    'Pieces',
    'Weight',
    'Type',
    'Rtn_PayTp',
      'Consignee',
    'Min',
    
   
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Date:'',
      Tally:'No Charges Exit For This Storer.',
      ReferenceNo:'',
      Pieces:'',
      Weight:'',
      Type:'',
      Rtn_PayTp:'',
      Consignee:'',
      Min:'',
      
     
    },
    
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerRecIvcInquiryComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Page:'1 of',
    worksheetGenerated:'7_16_21 15:43:44',
    Storer:'0069 ACH',
    Date:'11_23_22',
    Time:'02:58:00'
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
