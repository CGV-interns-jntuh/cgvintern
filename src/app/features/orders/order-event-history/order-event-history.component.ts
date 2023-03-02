import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-order-event-history',
  templateUrl: './order-event-history.component.html',
  styleUrls: ['./order-event-history.component.css']
})
export class OrderEventHistoryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Date',
    'Time',
    'Event',
    'Received',
    'Transmitted',
    'Sts',
  

  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Date:'11/11/22',
      Time:'01:10',
      Event:'Order Committed Committed By IPUTTAGUNT -Order Commited',
      Received:'11/11/22 01:10',
      Transmitted:'',
      Sts:'Ac',
    
      
  
    },
    {  
     Date:'11/10/22',
    Time:'05:46',
    Event:'Order Committed Committed By IPUTTAGUNT -Order Commited',
    Received:'11/10/22 05:46',
    Transmitted:'',
    Sts:'DL',
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
    BillofLading:'123455235',
    Storer:'1301 Neils Serial Storer',
    Consignee:'NKHOAN Neil Kohan'


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/orders/read']);
  }

}
