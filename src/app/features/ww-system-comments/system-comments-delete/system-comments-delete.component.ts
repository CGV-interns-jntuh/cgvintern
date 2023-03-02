import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-system-comments-delete',
  templateUrl: './system-comments-delete.component.html',
  styleUrls: ['./system-comments-delete.component.css']
})
export class SystemCommentsDeleteComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SystemCommentsDeleteComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
      FileID:'AH',
      Key:'0000017',
      SubCode:'IN',
      Seq:1,
      Text:'Test Adding Comments for Accounts Receivable Aging Detail',
      ChgDate:'06/25/20',
      ChgTime:'15:14',
      ChgID:'KPAVER',
     
  
   
       
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
