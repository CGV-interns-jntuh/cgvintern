import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-receivable-print',
  templateUrl: './receivable-print.component.html',
  styleUrls: ['./receivable-print.component.css']
})
export class ReceivablePrintComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
   @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ReceivablePrintComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
    invoiceNumber:62,
    Report_Type: '  *DETAILS ',
    File_Extension: '*XLM',
    Email: '',
   



  
       
    });
  }

  closeDialog(){
    // Write your stuff here
   this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  number(){
    
  }

}
