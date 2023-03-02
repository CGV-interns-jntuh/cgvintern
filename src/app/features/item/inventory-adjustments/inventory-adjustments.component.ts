import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { ItemAdjustmentChangeDateComponent } from '../item-adjustment-work-with/item-adjustment-change-date/item-adjustment-change-date.component';
import { ItemAdjustmentDisplayComponent } from '../item-adjustment-work-with/item-adjustment-display/item-adjustment-display.component';

@Component({
  selector: 'app-inventory-adjustments',
  templateUrl: './inventory-adjustments.component.html',
  styleUrls: ['./inventory-adjustments.component.css']
})
export class InventoryAdjustmentsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'trans',
    'date',
    'storer',
    'fT',
    'reason',
    'location',
    'quantity',
    'iT',
    'opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      trans:'123494961',
      date:'12/02/22',
      storer:'1301',
      fT:'L',
      reason:'AK Transfer',
      location:'13 TDRE/PAC',
      quantity:'20-',
      iT:'A'
    
      
    },
    {
      trans:'123494962',
      date:'12/02/22',
      storer:'1301',
      fT:'L',
      reason:'AK Transfer',
      location:'13 1/A',
      quantity:'20',
      iT:'A'
    
      
    },
   
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    // @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    // private dialogRef: MatDialogRef<AttributesComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      trans:'',
      reason:'',
      fromDate:'12/01/22',
      toDate:'12/12/22',
      storer:'',
      type:'',
      location:'',
    
    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys']);
 
 


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
  // AddressTypeInquiryForm(element:any){
  //   this.matDialog.open(AddressTypeInquiryComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false                           
  //   });
  // }



 
 
addAttribute(){

}




}
