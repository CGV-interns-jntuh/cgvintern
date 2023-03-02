import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-consignee-child-items-add',
  templateUrl: './consignee-child-items-add.component.html',
  styleUrls: ['./consignee-child-items-add.component.css']
})
export class ConsigneeChildItemsAddComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ConsigneeChildItemsAddComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer:'',
      ItemCode:'',
      ConsigneeCode:'',
      BuyerItemCode:'',
      UPCCode:'',
      SecondaryItemCode:'',
      StatusCode:''
     });
  }

  addChildItem(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
