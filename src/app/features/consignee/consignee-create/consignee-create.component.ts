import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-consignee-create',
  templateUrl: './consignee-create.component.html',
  styleUrls: ['./consignee-create.component.css']
})
export class ConsigneeCreateComponent implements OnInit {

  form!: FormGroup;
  
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ConsigneeCreateComponent>
  ) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      ConsigneeCode:'',
      Name:'',
      ZipCode:'',
      ZoneCode:'',
      PhoneNumber:'',
      DestinationCode:'',
      street:'',
      city:'',
      state:''
    })
  }

  addConsignee(){
    console.log(this.form.value)
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
