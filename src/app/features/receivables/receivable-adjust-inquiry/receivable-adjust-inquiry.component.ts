import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-receivable-adjust-inquiry',
  templateUrl: './receivable-adjust-inquiry.component.html',
  styleUrls: ['./receivable-adjust-inquiry.component.css']
})
export class ReceivableAdjustInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Seq No.',
    'Adjust Date',
    'Ledger',
    'Description',
    'Adjusment Amount' 
  ];

  

  dataSource:any=[]

  duplicateSource:any =[
    {
      SeqNo:'',
      AdjustDate:'',
      Ledger:'',
      Description:'',
      AdjusmentAmount:''
    }
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ReceivableAdjustInquiryComponent>
  ) { }
 

  ngOnInit(): void {

    this.form= this.fb.group({
      Invoice:'',
      Customer:'',
      Date:'',
      BillTo:'',
      Amount:'',
      Type:''
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  adjustedValue()
  {
    return "$1155.00"
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
