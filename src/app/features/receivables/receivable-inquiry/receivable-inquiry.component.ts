import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-receivable-inquiry',
  templateUrl: './receivable-inquiry.component.html',
  styleUrls: ['./receivable-inquiry.component.css']
})
export class ReceivableInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Originating Customer',
    'Bill to Customer'
  ];

  displayedColumns1: string[] = [
    'St',
    'Sequence No.',
    'Bld No.',
    'Ledger',
    'Description',
    'Paid Amount',
    'AJ',
    'Original Amount'
  ];

  dataSource:any=[]
  dataSource1:any=[]

  duplicateSource1:any =[
    {
      St:'DU',
      SequenceNo:'1',
      BldNo:'604',
      Ledger:'010000',
      Description:'Handling Charges',
      PaidAmount:'$.00',
      AJ:'',
      OriginalAmount:'$410.00'
    },
    {
      St:'DU',
      SequenceNo:'2',
      BldNo:'604',
      Ledger:'0500000',
      Description:'Inbound Charges',
      PaidAmount:'$.00',
      AJ:'',
      OriginalAmount:'$745.00'
    }
    


  ]

  duplicateSource:any =[
    {
      OriginatingCustomer:'1979 Tina',
      BilltoCustomer:'1979 Tina'
      
    },
    {
      OriginatingCustomer:'123 Oak Hallow Ct.',
      BilltoCustomer:'123 Oak Hallow Ct.'
    },
    {
      OriginatingCustomer:'Columbus, OH 43228',
      BilltoCustomer:'Columbus, OH 43228'
    }


  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ReceivableInquiryComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      InvoiceNumber:'',
      Status:'',
      InvoiceDate:'',
      RefNo:'',
      TransactionDate:'',
      TransType:'',
      InvoiceAmount:'',
      DueDate:'',
      AdjAmount:'',
      Description:''
    })

    this.dataSource = this.duplicateSource;
    this.dataSource1 = this.duplicateSource1;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }

  closeDialog(){
    this.dialogRef.close();
  }


}
