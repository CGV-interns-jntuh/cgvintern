import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-consignee-delete',
  templateUrl: './consignee-delete.component.html',
  styleUrls: ['./consignee-delete.component.css']
})
export class ConsigneeDeleteComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ConsigneeDeleteComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      ConsigneeCode:this.anyvariable.code,
      Name:this.anyvariable.name,
      Address:'',
      ZipCode:this.anyvariable.zipCode,
      ConsolidateTo:''
      
    })
  }

  deleteConsignee(){

  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
