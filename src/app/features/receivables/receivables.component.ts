import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { ReceivableAdjustInquiryComponent } from './receivable-adjust-inquiry/receivable-adjust-inquiry.component';
import { ReceivableAdjustInvoiceComponent } from './receivable-adjust-invoice/receivable-adjust-invoice.component';
import { ReceivableCommentsComponent } from './receivable-comments/receivable-comments.component';
import { ReceivableCreditInvoiceComponent } from './receivable-credit-invoice/receivable-credit-invoice.component';
import { ReceivableInquiryComponent } from './receivable-inquiry/receivable-inquiry.component';
import { ReceivablePrintComponent } from './receivable-print/receivable-print.component';

@Component({
  selector: 'app-receivables',
  templateUrl: './receivables.component.html',
  styleUrls: ['./receivables.component.css']
})
export class ReceivablesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'STS',
    'Invoice Number',
    'Invoice Date',
    'Tc',
    'Tr Tp',
    'Bld No',
    'Customer',
    'Invoice Amount',
    'Action'
  ];

  

  dataSource:any=[]

  duplicateSource:any =[
    {
      STS:'DL',
      InvoiceNumber:'82',
      InvoiceDate:'10/03/22',
      Tc:'I',
      TrTp:'WR',
      BldNo:'13',
      Customer:'0013 Neils Item Storer',
      InvoiceAmount:'$.00'
    },
    {
      STS:'EN',
      InvoiceNumber:'81',
      InvoiceDate:'10/03/22',
      Tc:'I',
      TrTp:'WR',
      BldNo:'13',
      Customer:'0013 Neils Item Storer',
      InvoiceAmount:'$.00'
    }
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
      Invoice:'',
      Customer:'',
      Dates:'',
      RefNo:'',
      Building:'',
      Status:'',
      Type:''
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  receivableAdjustInvoice(move: any) {
    // this.router.navigate(['storer/contacts', storer]);
     this.matDialog.open(ReceivableAdjustInvoiceComponent, {
       "width": '1000px',
       "maxHeight": '80vh',
 
       "data": move,
       "autoFocus": false
     });
   }

   receivableCreditInvoice(move: any) {
    // this.router.navigate(['storer/contacts', storer]);
     this.matDialog.open(ReceivableCreditInvoiceComponent, {
       "width": '1000px',
       "maxHeight": '80vh',
 
       "data": move,
       "autoFocus": false
     });
   }

   receivableInquiry(move: any) {
    // this.router.navigate(['storer/contacts', storer]);
     this.matDialog.open(ReceivableInquiryComponent, {
       "width": '1000px',
       "maxHeight": '80vh',
 
       "data": move,
       "autoFocus": false
     });
   }

   receivableAdjustInquiry(move: any) {
    // this.router.navigate(['storer/contacts', storer]);
     this.matDialog.open(ReceivableAdjustInquiryComponent, {
       "width": '1000px',
       "maxHeight": '80vh',
 
       "data": move,
       "autoFocus": false
     });
   }

   receivableComments(move: any) {
    // this.router.navigate(['storer/contacts', storer]);
     this.matDialog.open(ReceivableCommentsComponent, {
       "width": '1000px',
       "maxHeight": '80vh',
 
       "data": move,
       "autoFocus": false
     });
   }

   receivablePrint(move: any) {
    // this.router.navigate(['storer/contacts', storer]);
     this.matDialog.open(ReceivablePrintComponent, {
       "width": '1000px',
       "maxHeight": '80vh',
 
       "data": move,
       "autoFocus": false
     });
   }

   receivableDetails(move: any) {
     this.router.navigate(['/main-nav/receivables/details']);
    //  this.matDialog.open(ReceivableCommentsComponent, {
    //    "width": '1000px',
    //    "maxHeight": '80vh',
 
    //    "data": move,
    //    "autoFocus": false
    //  });
   }



}
