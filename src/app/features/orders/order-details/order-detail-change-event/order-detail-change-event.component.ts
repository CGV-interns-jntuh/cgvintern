import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-detail-change-event',
  templateUrl: './order-detail-change-event.component.html',
  styleUrls: ['./order-detail-change-event.component.css']
})
export class OrderDetailChangeEventComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<OrderDetailChangeEventComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Line:'006',
      Quantity:100,
      LotCode:'',
      ItemCode:'7099145C1',
      ShipFrom:'A',
      OverrideWeight:'',
      ResonForChange:''
      
    })
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  changeEventButton(){
    
  }


}
