import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-box-content-change',
  templateUrl: './box-content-change.component.html',
  styleUrls: ['./box-content-change.component.css']
})
export class BoxContentChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BoxContentChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
      boxNumber: 772297140780,
      location:'ANTHONY',
      customer:'1065',
      bundles:'',
      contentCount:2,
      bundle:'',
      sequence:2,
      contentID:'ITEM B',
      segment:'',
      xReference:'ITEM B',
      source:'RCU25R',
      asset:'',
      fileType:'ABC',
      majorDesc:'ITEMB',
      minorDesc:'',
      clientId:'',
      clientGroup:'',
      formToDates:'0001-01-01-9999-12-31',
      ageClass:2,
      schdDestry:'9999-12-31',
      retentionCode:'',
      status:'',
     
   
      
  
         
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
