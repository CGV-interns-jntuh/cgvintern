import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-audit-headers-status',
  templateUrl: './audit-headers-status.component.html',
  styleUrls: ['./audit-headers-status.component.css']
})
export class AuditHeadersStatusComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AuditHeadersStatusComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
      loadNumber: 1,
      referenceNumber:'TEST',
      headerStatus:'EN',
    
   
      
  
         
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
