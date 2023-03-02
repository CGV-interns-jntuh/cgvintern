import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-consignee-items-add',
  templateUrl: './consignee-items-add.component.html',
  styleUrls: ['./consignee-items-add.component.css']
})
export class ConsigneeItemsAddComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ConsigneeItemsAddComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer:'',
      ItemCode:'',
      ConsigneeCode:'',
      BuyerItemCode:'',
      UPCCode:'',
      SecondaryItemCode:'',
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
