import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-carrier-edi-documents-change',
  templateUrl: './carrier-edi-documents-change.component.html',
  styleUrls: ['./carrier-edi-documents-change.component.css']
})
export class CarrierEdiDocumentsChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CarrierEdiDocumentsChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
      SCACCode:'SXTI',
      InboundOutbound:0,
      DocumentType:214,
      ApplicationName:'D',
      validationProgram:'',
      MessageFile:'',
      Status:'AC'
  
   
       
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
