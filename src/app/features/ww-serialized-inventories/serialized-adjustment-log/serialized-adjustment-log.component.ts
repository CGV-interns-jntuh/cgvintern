import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-serialized-adjustment-log',
  templateUrl: './serialized-adjustment-log.component.html',
  styleUrls: ['./serialized-adjustment-log.component.css']
})
export class SerializedAdjustmentLogComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SerializedAdjustmentLogComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Missing: 'Y',
    Found:'Y',
    LocationChange:'Y',
    StockCondition:'Y',
    QuantityChange:'Y',
  
    


  
       
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
