import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-comment-sub-codes-add',
  templateUrl: './comment-sub-codes-add.component.html',
  styleUrls: ['./comment-sub-codes-add.component.css']
})
export class CommentSubCodesAddComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CommentSubCodesAddComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    CommentSubCodeID: ' ',
    CommentSubCodeDescription:'',
 
   
       
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
