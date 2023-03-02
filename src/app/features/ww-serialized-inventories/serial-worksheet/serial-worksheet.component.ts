import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-serial-worksheet',
  templateUrl: './serial-worksheet.component.html',
  styleUrls: ['./serial-worksheet.component.css']
})
export class SerialWorksheetComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SerialWorksheetComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    ListRecountOnly: 'N',
    BreakByAisle:'N',
    BreakEvery:'',
    Location:'',
  
    


  
       
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
