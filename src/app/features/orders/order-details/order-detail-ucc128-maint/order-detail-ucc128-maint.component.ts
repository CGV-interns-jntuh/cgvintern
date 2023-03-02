import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-detail-ucc128-maint',
  templateUrl: './order-detail-ucc128-maint.component.html',
  styleUrls: ['./order-detail-ucc128-maint.component.css']
})
export class OrderDetailUcc128MaintComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Serial_Number',
    'Quantity',
   
   

  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
     Serial_Number:'00100006127740000129',
     Quantity:'10',
  
    },
   {
    Serial_Number:"00100006127740000136",
    Quantity:'40'
   }
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<OrderDetailUcc128MaintComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Item:'ITEM1',
     Lot:'100',
     Qty:'3C (3)'


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
