import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-detail-move-queue',
  templateUrl: './order-detail-move-queue.component.html',
  styleUrls: ['./order-detail-move-queue.component.css']
})
export class OrderDetailMoveQueueComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<OrderDetailMoveQueueComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Storer:774,
      BillNumber:123455237,
      Line:'BACP144Y',
      Priority:'',
      sdLocation:'DOCK/ 2'
      
    })
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  moveQueueButton(){

  }

}
