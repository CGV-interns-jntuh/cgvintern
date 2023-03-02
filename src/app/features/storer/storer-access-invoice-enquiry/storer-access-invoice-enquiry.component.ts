import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-access-invoice-enquiry',
  templateUrl: './storer-access-invoice-enquiry.component.html',
  styleUrls: ['./storer-access-invoice-enquiry.component.css']
})
export class StorerAccessInvoiceEnquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Date',
    'TallyOrder',
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
      TallyOrder:'No Charges Exit For This Storer.',
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
    private dialogRef: MatDialogRef<StorerAccessInvoiceEnquiryComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Page:'1 of',
    Document:'',
    worksheetGenerated:'7_16_21 15:43:44',
    Storer:'0069 ACH',
    Date:'11_23_22',
    Time:'02:58:00'
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/storer/read']);
    this.dialogRef.close();
  }

  closeDialog(){
    this.dialogRef.close();
  }


}
