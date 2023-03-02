import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ww-master-serial-list-change',
  templateUrl: './ww-master-serial-list-change.component.html',
  styleUrls: ['./ww-master-serial-list-change.component.css']
})
export class WwMasterSerialListChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WwMasterSerialListChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Serial: 'MASTER SERIAL 2',
    Type:'TYPE2',
  
   
       
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
