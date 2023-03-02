import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-item-adjustment-display',
  templateUrl: './item-adjustment-display.component.html',
  styleUrls: ['./item-adjustment-display.component.css']
})
export class ItemAdjustmentDisplayComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ItemAdjustmentDisplayComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({

    storer:'13 Neils Item Storer',
    item:'AACNDF80823 TEST 123',
    lot:'',
    Location:'13 1/A',
    adjustmentQuantity:5,
    inventoryBucket:'A',
    date_Time:'10/19/20 14:50',
    changeUserID:'NKHOAN',
    wRorBillNumber:'',
    serial:'',
    reasonforAdjustment:'99 StockWork',

   
       
    });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  attributes(){
    
  }

}
