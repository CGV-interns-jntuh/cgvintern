import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-detail-cross-doc-ref',
  templateUrl: './order-detail-cross-doc-ref.component.html',
  styleUrls: ['./order-detail-cross-doc-ref.component.css']
})
export class OrderDetailCrossDocRefComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<OrderDetailCrossDocRefComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      
      billNum:'123455237',
      originalLineNum:'002',
      tallyNum:''
      

      
     });
  }

  changeShipForm(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
