import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-consignee-update',
  templateUrl: './consignee-update.component.html',
  styleUrls: ['./consignee-update.component.css']
})
export class ConsigneeUpdateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ConsigneeUpdateComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      ConsigneeCode:this.anyvariable.code,
      Name:this.anyvariable.name,
      street:'',
      city:this.anyvariable.city,
      state:this.anyvariable.state,
      ZipCode:this.anyvariable.zipCode,
      ZoneCode:'',
      PhoneNumber:'',
      DestinationCode:'',
      
    })
  }

  updateConsignee(){
    console.log(this.form.value)
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
