import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-details-create',
  templateUrl: './order-details-create.component.html',
  styleUrls: ['./order-details-create.component.css']
})
export class OrderDetailsCreateComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<OrderDetailsCreateComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Quantity: '  5 ',
    Item_Code: '1234',
    Lot_Code: '123456 12345 1234',
    Ship_Form:'A',
    Override_Weight: '',
    Reason_for_Change:'',
    Orig_Line:'',



  
       
    });
  }

  closeDialog(){
    // Write your stuff here
   this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  maintain(){
    
  }

}
