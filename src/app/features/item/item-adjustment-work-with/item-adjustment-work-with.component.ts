import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { ItemAdjustmentChangeDateComponent } from './item-adjustment-change-date/item-adjustment-change-date.component';
import { ItemAdjustmentDeleteComponent } from './item-adjustment-delete/item-adjustment-delete.component';
import { ItemAdjustmentDisplayComponent } from './item-adjustment-display/item-adjustment-display.component';
import { ItemAdjustmentInquiryComponent } from './item-adjustment-inquiry/item-adjustment-inquiry.component';

@Component({
  selector: 'app-item-adjustment-work-with',
  templateUrl: './item-adjustment-work-with.component.html',
  styleUrls: ['./item-adjustment-work-with.component.css']
})
export class ItemAdjustmentWorkWithComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Number',
    'L',
    'Date',
    'LotCodes',
    'Location',
    'Bkt',
    'Qty',
    'Opt',
    
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
     Number:'123494230',
     L:'I',
     Date:'10/19/20',
     LotCodes:'',
     Location:'13  1/A',
     Bkt:'A',
     Qty:'5',
     Opt:'',
    },
    {
      Number:'123494183',
      L:'I',
      Date:'9/24/20',
      LotCodes:'',
      Location:'13  1/A',
      Bkt:'A',
      Qty:'100',
      Opt:'',
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
    Item:' AACNDF80823   TEST    123',
    Type:'',
    Date:'',
    Location:'',
    Lots:'0',
    

    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  itemAdjustmentInquiry(element: any) {
    this.matDialog.open(ItemAdjustmentInquiryComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }

  itemAdjustmentDelete(element: any) {
    this.matDialog.open(ItemAdjustmentDeleteComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
   }

   itemAdjustmentChangeDate(element: any) {
    this.matDialog.open(ItemAdjustmentChangeDateComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }

  itemAdjustmentDisplay(element: any) {
    this.matDialog.open(ItemAdjustmentDisplayComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }

  onBack() {
    //this.router.navigate(['item/adjustment']);
  }
}
