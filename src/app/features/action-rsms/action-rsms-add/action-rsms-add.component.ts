import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-action-rsms-add',
  templateUrl: './action-rsms-add.component.html',
  styleUrls: ['./action-rsms-add.component.css']
})
export class ActionRsmsAddComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ActionRsmsAddComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Action: '',
    Action_Description:'',
    Short_Description:'',
    Destination_Box:'',
    Delivery_Location:'',
    processing_Program:'',
    Action_Level:'',
    Event_Code:'',
    Request_Event:'',
 
    

       
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
