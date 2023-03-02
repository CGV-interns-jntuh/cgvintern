import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-action-rsms-change',
  templateUrl: './action-rsms-change.component.html',
  styleUrls: ['./action-rsms-change.component.css']
})
export class ActionRsmsChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ActionRsmsChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Action: 'DESTROYC',
    Action_Description: 'Destroy Item with a certificate',
    Short_Description: 'DESTROYC',
    Destination_Box: '*DESTROY',
    Delivery_Location: 'DESTROY',
    processing_Program: 'QPU160R',
    Action_Level: 'I',
    Event_Code: 'IDS',
    Request_Event: 'IDS',
 
    

       
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
