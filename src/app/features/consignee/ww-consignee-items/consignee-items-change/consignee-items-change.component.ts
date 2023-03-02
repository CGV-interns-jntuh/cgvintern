import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-consignee-items-change',
  templateUrl: './consignee-items-change.component.html',
  styleUrls: ['./consignee-items-change.component.css']
})
export class ConsigneeItemsChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ConsigneeItemsChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer:'604',
      ItemCode:'00374122',
      ConsigneeCode:'RICOH',
      BuyerItemCode:'TBEV1G',
      UPCCode:'',
      SecondaryItemCode:'TBEV1G',
      StatusCode:'AC'
  
   
       
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
