import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-system-comments-change',
  templateUrl: './system-comments-change.component.html',
  styleUrls: ['./system-comments-change.component.css']
})
export class SystemCommentsChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SystemCommentsChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
      FileID:'AH',
      Key:'0000002',
      SubCode:'IN',
      Seq:2,
      Text:'Testing Invoice 2 Comment Line 2',
     
  
   
       
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
