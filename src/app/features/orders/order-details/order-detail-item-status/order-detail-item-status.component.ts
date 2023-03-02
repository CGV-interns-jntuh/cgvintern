import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-detail-item-status',
  templateUrl: './order-detail-item-status.component.html',
  styleUrls: ['./order-detail-item-status.component.css']
})
export class OrderDetailItemStatusComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
   @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<OrderDetailItemStatusComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Storer: '  9500 Krissys Item Storer ',
    Item_Code: '1234 Item Code 1 Line 2 Item 1 On Hand ....25 Committed ....25',
   



  
       
    });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  inquiry(){
    
  }
}
