import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ww-boxes-item-labels',
  templateUrl: './ww-boxes-item-labels.component.html',
  styleUrls: ['./ww-boxes-item-labels.component.css']
})
export class WwBoxesItemLabelsComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WwBoxesItemLabelsComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    LabelStyle: ' ',
    OutputQueue:'',
    
   
       
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
