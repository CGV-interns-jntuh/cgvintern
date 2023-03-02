import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ww-boxes-bundle-labels',
  templateUrl: './ww-boxes-bundle-labels.component.html',
  styleUrls: ['./ww-boxes-bundle-labels.component.css']
})
export class WwBoxesBundleLabelsComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WwBoxesBundleLabelsComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Bundle:' ',
    LabelStyle:'',
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
