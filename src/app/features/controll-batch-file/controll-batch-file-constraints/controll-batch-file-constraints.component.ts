import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-controll-batch-file-constraints',
  templateUrl: './controll-batch-file-constraints.component.html',
  styleUrls: ['./controll-batch-file-constraints.component.css']
})
export class ControllBatchFileConstraintsComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
   @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<ControllBatchFileConstraintsComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Storer_Number: 8026,
    Broker_Name: '',
    Carrier_Code: '',
    Attribute_Name:'',
    All_Datials:'',
    Attribute_value:'',
    State:'',
    Gift_Messages:'',
   



  
       
    });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  number(){
    
  }

}
