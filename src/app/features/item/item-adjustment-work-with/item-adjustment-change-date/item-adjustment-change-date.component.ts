import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-item-adjustment-change-date',
  templateUrl: './item-adjustment-change-date.component.html',
  styleUrls: ['./item-adjustment-change-date.component.css']
})
export class ItemAdjustmentChangeDateComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ItemAdjustmentChangeDateComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    transactionNumber:  123494230,
    storer:13,
    item:'AACNDF80823',
    quantity:5,
    Bucket:'A',
    Location:'13 1/A',
    adjustmentDate:'10 19 2020'
   
       
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
