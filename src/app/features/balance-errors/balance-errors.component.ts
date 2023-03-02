import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { BalanceErrorItemStatusComponent } from './balance-error-item-status/balance-error-item-status.component';
import { BalanceErrorLotStatusComponent } from './balance-error-lot-status/balance-error-lot-status.component';
import { BalanceErrorStkActInquiryComponent } from './balance-error-stk-act-inquiry/balance-error-stk-act-inquiry.component';
import { BalanceErrorsAdjustmentsComponent } from './balance-errors-adjustments/balance-errors-adjustments.component';
import { BalanceErrorsBalancesComponent } from './balance-errors-balances/balance-errors-balances.component';
import { BalanceErrorsItemLocationsComponent } from './balance-errors-item-locations/balance-errors-item-locations.component';
import { BalanceErrorsItemReceiversComponent } from './balance-errors-item-receivers/balance-errors-item-receivers.component';
import { BalanceErrorsOrdersComponent } from './balance-errors-orders/balance-errors-orders.component';

@Component({
  selector: 'app-balance-errors',
  templateUrl: './balance-errors.component.html',
  styleUrls: ['./balance-errors.component.css']
})
export class BalanceErrorsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'StorerNumber',
    'Item',
    'Location',
    'ErrorMessage',
    'DateWritten',
    'opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      StorerNumber:65,
      Item:'AA00000750 HOSE ,FUEL.ASSY 1/2',
      Location:100,
      ErrorMessage:'LCE0002',
      DateWritten:'11/23/22',
      
     

      
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
      Storer:'',
      Item:'',
    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
 
 


  }

  BalanceErrorsLotStatusForm(element:any){
    this.matDialog.open(BalanceErrorLotStatusComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
  
  
  BalanceErrorsItemStatusForm(element:any){
    this.matDialog.open(BalanceErrorItemStatusComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
  
  BalanceErrorsStkActivityInquiryForm(element:any){
    this.matDialog.open(BalanceErrorStkActInquiryComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
 
  }

  
  BalanceErrorsOrders(element:any){
    this.matDialog.open(BalanceErrorsOrdersComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
 
  }

  BalanceErrorsAdjustments(element:any){
    this.matDialog.open(BalanceErrorsAdjustmentsComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
 
  }

  BalanceErrorsBalances(element:any){
    this.matDialog.open(BalanceErrorsBalancesComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
 
  }

  BalanceErrorsItemLocations(element:any){
    this.matDialog.open(BalanceErrorsItemLocationsComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
 
  }

  BalanceErrorsReceivers(element:any){
    this.matDialog.open(BalanceErrorsItemReceiversComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
 
  }


addAttribute(){

}

}
