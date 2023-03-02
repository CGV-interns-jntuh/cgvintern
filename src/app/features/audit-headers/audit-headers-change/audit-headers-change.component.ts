import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-audit-headers-change',
  templateUrl: './audit-headers-change.component.html',
  styleUrls: ['./audit-headers-change.component.css']
})
export class AuditHeadersChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AuditHeadersChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
      loadNumber: 1,
      referenceNumber:'TEST',
      dueDate:'6/22/16',
      paymentTerms:30,
      entry:'DWHITE    QPADEV000H 2016-06-22.10.10.000000',
      authorization:'1940-01-01-00.01.00.000000',
      status:'EN',
     
   
      
  
         
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
