import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storage-invoice-inquiry',
  templateUrl: './storage-invoice-inquiry.component.html',
  styleUrls: ['./storage-invoice-inquiry.component.css']
})
export class StorageInvoiceInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Item',
    'OnHandBalance',
    'OnHandWeight',
    'Rate',
    'ChargeAmount',
    'MN',
   
    
   
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Item:'No Storage Charges Exist',
      OnHandBalance:'',
      OnHandWeight:'',
      Rate:'',
      ChargeAmount:'',
      MN:'',
     
      
     
    },
    
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorageInvoiceInquiryComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Position_to_Item:'',
    Generated :'11_24_22    5:15.34',
    Storer:'0069 ACH',
    Date:11_24_22,
    Time:'00:02:01'
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys']);
  }

  closeDialog(){
    this.dialogRef.close();
  }


}
