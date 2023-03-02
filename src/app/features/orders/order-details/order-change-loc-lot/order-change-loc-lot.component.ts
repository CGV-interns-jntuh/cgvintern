import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-change-loc-lot',
  templateUrl: './order-change-loc-lot.component.html',
  styleUrls: ['./order-change-loc-lot.component.css']
})
export class OrderChangeLocLotComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
   @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<OrderChangeLocLotComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Bill: 123455239,
    Item: '1234 Item Code1',
    Quantity: '2L+1 (5)',
    Line_No:'004',
    Location:'12 A/1',
    Lot: '345678|34567|3456',
    

       
    });
  }

  closeDialog(){
    // Write your stuff here
   this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  location(){
    
  }

}
