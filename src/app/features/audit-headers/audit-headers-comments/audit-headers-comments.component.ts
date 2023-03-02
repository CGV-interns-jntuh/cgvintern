import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-audit-headers-comments',
  templateUrl: './audit-headers-comments.component.html',
  styleUrls: ['./audit-headers-comments.component.css']
})
export class AuditHeadersCommentsComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AuditHeadersCommentsComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
      loadNumber: 1,
      Comment:'',
    
      
   
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
