import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-detail-change-ship-from',
  templateUrl: './order-detail-change-ship-from.component.html',
  styleUrls: ['./order-detail-change-ship-from.component.css']
})
export class OrderDetailChangeShipFromComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<OrderDetailChangeShipFromComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      item: '200 TEST ITEM 200',
      quantity:'0000020',
      currentBucket:'A',
      shipFormInventoy:'',
      
     });
  }

  changeShipForm(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
