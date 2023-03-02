import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-inventory-book-synopsys',
  templateUrl: './inventory-book-synopsys.component.html',
  styleUrls: ['./inventory-book-synopsys.component.css']
})
export class InventoryBookSynopsysComponent implements OnInit {

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<InventoryBookSynopsysComponent>
  ) { }

  displayedColumns: string[] = [
    'Book',
    'Number',
    'Quantity'
  ];

  displayedColumns1: string[] = [
    'Count',
    'Number',
    'Pct1',
    'Quantity',
    'Pct2'
    
  ];

  dataSource:any=[]
  dataSource1:any=[]

  duplicateSource:any =[
    {
      Book:'Orginal lines',
      Number:0,
      Quantity:10096,
    },
    {
      Book:'New lines',
      Number:0,
      Quantity:''
    },
    {
      Book:'Percentage',
      Number:0,
      Quantity:''
    }
  ]

  duplicateSource1:any =[
    {
      Count:'Lines Counted',
      Number:0,
      Pct1:0,
      Quantity:0,
      Pct2:0,
    },
    {
      Count:'Missing Counts',
      Number:9,
      Pct1:100,
      Quantity:10096,
      Pct2:100,
    },
    {
      Count:'Pending Recount',
      Number:0,
      Pct1:0,
      Quantity:0,
      Pct2:0,
    },
    {
      Count:'Verified Counts',
      Number:0,
      Pct1:0,
      Quantity:0,
      Pct2:0,
    },

    {
      Count:'Book Differences',
      Number:0,
      Pct1:0,
      Quantity:0,
      Pct2:0,
    }
  ]

  ngOnInit(): void {
    console.log(this.anyvariable)

    this.dataSource = this.duplicateSource;
    this.dataSource1 = this.duplicateSource1;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
