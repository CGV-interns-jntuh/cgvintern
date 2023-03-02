import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-controll-batch-file-create',
  templateUrl: './controll-batch-file-create.component.html',
  styleUrls: ['./controll-batch-file-create.component.css']
})
export class ControllBatchFileCreateComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ControllBatchFileCreateComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Storer_Number: '',
    Sequence:'',
    Mix_Carriers:'',
    Mix_Ship_Dates:'',
    Batch_Size:'',
    Days_Forward:'',
    Minumium_Demand_Quantity:'',
    Maximum_Lines_On_Order:'',
    Max_Quantity_On_Order:'',
 
    

       
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
