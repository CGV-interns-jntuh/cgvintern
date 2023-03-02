import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-customer-addresses-change',
  templateUrl: './customer-addresses-change.component.html',
  styleUrls: ['./customer-addresses-change.component.css']
})
export class CustomerAddressesChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CustomerAddressesChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Customer: '0100',
    AddressType:'PICK',
    CustomerName:'Codeworks',
    Address:'6388 Fiesta Drive',
    CityStZip:'Columbus OH 43235',

 
   
       
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
