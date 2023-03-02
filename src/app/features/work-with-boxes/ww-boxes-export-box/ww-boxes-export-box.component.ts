import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ww-boxes-export-box',
  templateUrl: './ww-boxes-export-box.component.html',
  styleUrls: ['./ww-boxes-export-box.component.css']
})
export class WwBoxesExportBoxComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WwBoxesExportBoxComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    BoxNumber: 1234,
    FromLibrary:'RSMSDTEST',
    ToLibrary:'',
    Submittobatch:'-',
 
    
   
       
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
