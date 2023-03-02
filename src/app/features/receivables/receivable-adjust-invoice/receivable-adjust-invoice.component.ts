import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-receivable-adjust-invoice',
  templateUrl: './receivable-adjust-invoice.component.html',
  styleUrls: ['./receivable-adjust-invoice.component.css']
})
export class ReceivableAdjustInvoiceComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    
    'Ledger',
    'Description',
    'OrgAmt',
    'Adjusment',
    'AdjAmt'
  
  ];

  

  dataSource:any=[]

  duplicateSource:any =[
    {
      
      Ledger:'',
      Description:'',
      OrgAmt:'',
      Adjusment:'',
      AdjAmt:''
    }
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<ReceivableAdjustInvoiceComponent>,
    private route: ActivatedRoute,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      Invoice:'79',
      Desc:'Posting for Tally : 001157734',
      Customer:'0013 Neils Item Storedr',
      Date:'10/03/22',
      Type:'Wr WareHouse Recei',
      RefNo:'100322A',
      Balance:'$.00'
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
