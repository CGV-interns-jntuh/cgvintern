import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-box-content-item-label',
  templateUrl: './box-content-item-label.component.html',
  styleUrls: ['./box-content-item-label.component.css']
})
export class BoxContentItemLabelComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
   @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<BoxContentItemLabelComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    labelStyle: '',
    outputQueue: '',
    
   



  
       
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
