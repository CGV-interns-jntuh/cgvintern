import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-system-comments-change-set',
  templateUrl: './system-comments-change-set.component.html',
  styleUrls: ['./system-comments-change-set.component.css']
})
export class SystemCommentsChangeSetComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SystemCommentsChangeSetComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
      FileID:'AH',
      Key:'0000002',
      Sub:'IN',
   
     
  
   
       
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
