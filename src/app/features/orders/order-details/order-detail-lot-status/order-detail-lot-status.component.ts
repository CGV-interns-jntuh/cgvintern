import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-detail-lot-status',
  templateUrl: './order-detail-lot-status.component.html',
  styleUrls: ['./order-detail-lot-status.component.css']
})
export class OrderDetailLotStatusComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Names_Here1',
    'Name2',
    'Name3',
    'Location',
    'Available',
   

  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
     Names_Here1:123456,
    Name2:12345,
    Name3:1234,
    Location:'00. A.  1',
    Available:0,
  
    },
    {  
    Names_Here1:234567,
    Name2:23456,
    Name3:2345,
    Location:'00. A.  1',
    Available:0,
  
    }
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<OrderDetailLotStatusComponent>

  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Storer:'9500 Krissy s Item Storer',
     Item:'1234 Item Code 1 Line 2 Item 1'


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
