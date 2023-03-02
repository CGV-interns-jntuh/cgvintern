import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-item-tally-inquiry',
  templateUrl: './item-tally-inquiry.component.html',
  styleUrls: ['./item-tally-inquiry.component.css']
})
export class ItemTallyInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Location',
    'F',
    'LotCodes',
    'LotReceived',
    'Actual',
    'Avail',
    'Commit',
    
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
     LotCodes:'Item Totals',
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
    Storer:'0013 Neils Item Storer',
    Item:'CP10004    SAMPLE    DISP4',
    UPC:'',
    In_Transit:'0',
    FutureAllocated:'0',
    Location:'',
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['item/tally']);
  }

 

}
