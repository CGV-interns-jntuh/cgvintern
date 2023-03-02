import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { ItemTallyInquiryComponent } from './item-tally-inquiry/item-tally-inquiry.component';

@Component({
  selector: 'app-item-tally-work-with',
  templateUrl: './item-tally-work-with.component.html',
  styleUrls: ['./item-tally-work-with.component.css']
})
export class ItemTallyWorkWithComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'TallyNumber',
    'Seq',
    'ST',
    'transDate',
    'ArrivalDate',
    'Expected',
    'Recv',
    'd',
    'Lots',
    'opt',
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
     
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
    Storer:'13',
    Item:'CP10004    SAMPLE    DISP4',
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  itemTallyInquiry(element:any){

    this.matDialog.open(ItemTallyInquiryComponent, {
      width: '1000px',
      height: 'auto',
      maxHeight: '95vh',
      data: element,
      autoFocus: false,
    });

  }

  onBack() {
    this.router.navigate(['/main-nav/item/read']);
  }

}
