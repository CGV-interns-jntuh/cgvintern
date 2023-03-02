import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-detail-stock-status',
  templateUrl: './order-detail-stock-status.component.html',
  styleUrls: ['./order-detail-stock-status.component.css']
})
export class OrderDetailStockStatusComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Location',
    'F',
    'Lot_Codes',
    'LotReceived',
    'Actual',
    'Avail',
    'Commit',
   
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
     Location:'12 A/1',
     F:'',
     Lot_Codes:'123456|12345|1234',
     LotReceived:'11/04/22',
     Actual:5,
     Avail:'',
     Commit:'5',
     
    },
    {
      Location:'12 A/2',
      F:'',
      Lot_Codes:'123456|12345|1234',
      LotReceived:'11/04/22',
      Actual:5,
      Avail:'',
      Commit:'5',
      
     }
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<OrderDetailStockStatusComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Storer:'9500 Krissy s Item Storer',
    Item:'1234 Item Code 1',
    UPC:'',
    In_Transit:0,
    Future_Allocated:0,
    Location:'',
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['order/details']);
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
