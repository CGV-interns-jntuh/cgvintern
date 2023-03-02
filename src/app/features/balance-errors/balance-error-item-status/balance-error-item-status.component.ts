import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-balance-error-item-status',
  templateUrl: './balance-error-item-status.component.html',
  styleUrls: ['./balance-error-item-status.component.css']
})
export class BalanceErrorItemStatusComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BalanceErrorItemStatusComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
      Storer:'65 Escobedo plant 65',
      Item:'AA00000950 TUBE, 1/2" BLACK HOSE ASSEMBLY',
    
   
      
  
         
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
