import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-controll-batch-file-delete',
  templateUrl: './controll-batch-file-delete.component.html',
  styleUrls: ['./controll-batch-file-delete.component.css']
})
export class ControllBatchFileDeleteComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ControllBatchFileDeleteComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Storer_Number: 8508,
    Sequence_Nuber: 10,
    Minumum_Demand:1,
    Lines_on_Order: 999,
    Quantity_on_Order: 9999999,
    Mix_Carriers: 'N',
    AMix_Ship_Dates: 'N',
    Batch_Size: 10,
    Ship_Days_Forward: 99,
    Status:'AC'
 
    

       
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
