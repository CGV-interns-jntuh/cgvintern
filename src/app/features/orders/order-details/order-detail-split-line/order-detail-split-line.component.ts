import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-detail-split-line',
  templateUrl: './order-detail-split-line.component.html',
  styleUrls: ['./order-detail-split-line.component.css']
})
export class OrderDetailSplitLineComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<OrderDetailSplitLineComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      
      billNum:'123455237',
      lineNum:'002',
      lotCodes:'',
      location:'',
      splitQuantity:''

      
     });
  }

  changeShipForm(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
