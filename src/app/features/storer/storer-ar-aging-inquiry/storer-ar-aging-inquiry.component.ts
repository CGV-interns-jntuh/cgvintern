import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-ar-aging-inquiry',
  templateUrl: './storer-ar-aging-inquiry.component.html',
  styleUrls: ['./storer-ar-aging-inquiry.component.css']
})
export class StorerArAgingInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'St',
    'InvoiceNumber',
    'InvoiceDate',
    'TT',
    'TrCd',
    'BldNo',
    'Bill_TO',
    'Customer',
    'BalanceDue',
    'Opt',
   
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      St:'DU',
      InvoiceNumber:34,
      InvoiceDate:'08_21_20',
      TT:'I',
      TrCd:'WR',
      BldNo:'100',
      Bill_TO:'0100 OCS',
      Customer:'Test Storer',
      BalanceDue:'$15.00',
      Opt:'',
     
    },
    {
      St:'DU',
      InvoiceNumber:31,
      InvoiceDate:'08_07_2020',
      TT:'I',
      TrCd:'WR',
      BldNo:'100',
      Bill_TO:'0100 OCS',
      Customer:'Test Storer',
      BalanceDue:'$300.00',
      Opt:'',
      
     }
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerArAgingInquiryComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Aging_Date:11_23_22,
    Customer:'0100 OCS Test Storer',
    IncludeTypes:'',
    Omit:'',
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['storer/read']);
  }
  closeDialog(){
      this.dialogRef.close();
  }

}
