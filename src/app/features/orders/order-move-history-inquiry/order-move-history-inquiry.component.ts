import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-order-move-history-inquiry',
  templateUrl: './order-move-history-inquiry.component.html',
  styleUrls: ['./order-move-history-inquiry.component.css']
})
export class OrderMoveHistoryInquiryComponent implements OnInit {

  form!:FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Move',
    'Number',
    'Item',
    'Lot',
    'Type',
    'Sub',
    'Quantity'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      'Move': '',
      'Number':'',
      'Item':'',
      'Lot':'',
      'Type':'',
      'Sub':'',
      'Quantity':''
    }
  ]
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<OrderMoveHistoryInquiryComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Document:123455235,
      Account:'1301 Neils Serial Storer' ,
      Sort:'Move Number',
      PendingMoves:'',
      CompletedMoves:'',
      TransactionType:'PK'
      
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
