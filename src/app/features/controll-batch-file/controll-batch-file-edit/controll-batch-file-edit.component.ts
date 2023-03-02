import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-controll-batch-file-edit',
  templateUrl: './controll-batch-file-edit.component.html',
  styleUrls: ['./controll-batch-file-edit.component.css']
})
export class ControllBatchFileEditComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ControllBatchFileEditComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
      Storer_Number: 8026,
      Sequence:10,
      Mix_Carriers:'N',
      Mix_Ship_Dates:'N',
      Batch_Size:10,
      Days_Forward:99,
      Minumium_Demand_Quantity:1,
      Maximum_Lines_On_Order:1,
      Max_Quantity_On_Order:100,
   
      
  
         
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
