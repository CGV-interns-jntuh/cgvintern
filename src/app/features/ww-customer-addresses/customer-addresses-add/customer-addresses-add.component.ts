import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-customer-addresses-add',
  templateUrl: './customer-addresses-add.component.html',
  styleUrls: ['./customer-addresses-add.component.css']
})
export class CustomerAddressesAddComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CustomerAddressesAddComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Customer: '0100',
    AddressType:'',
    CustomerName:'',
    Address:'',
    CityStZip:'',

 
   
       
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
