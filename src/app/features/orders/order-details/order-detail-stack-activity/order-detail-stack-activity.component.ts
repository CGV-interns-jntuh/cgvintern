import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-detail-stack-activity',
  templateUrl: './order-detail-stack-activity.component.html',
  styleUrls: ['./order-detail-stack-activity.component.css']
})
export class OrderDetailStackActivityComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Date',
    'Storer',
    'Reference',
    'Wr/BOL',
    'Description',
    'Amount',
    'Balance',
   
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Date:'',
      Storer:'',
      Reference:'',
      Wr_BOL:'',
      Description:'Opening balance',
      Amount:'',
      Balance:'0',
     
    },
    {
      Date:'',
      Storer:'',
      Reference:'',
      Wr_BOL:'',
      Description:'No Activity',
      Amount:'',
      Balance:'0',
      
     },
     {
      Date:'',
      Storer:'',
      Reference:'',
      Wr_BOL:'',
      Description:'Closing Balance',
      Amount:'',
      Balance:'0',
      
     }
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<OrderDetailStackActivityComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Storer:'9500 Krissy s Item Storer',
    Item:'1234 Item Code 1 Line 2 Item 1',
    Start:'12/01/21',
    End:'12/31/21',
    Location_Adj:'N',
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['orders/details']);
  }

  closeDialog(){
      this.dialogRef.close();
  }


}
