import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ww-boxes-chg-customer',
  templateUrl: './ww-boxes-chg-customer.component.html',
  styleUrls: ['./ww-boxes-chg-customer.component.css']
})
export class WwBoxesChgCustomerComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WwBoxesChgCustomerComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    BoxNumber: 123,
    Description:'Krissy Testing',
    ContentDates:'Unknown -0001-01-01',
    Customer:'1065',
    NewCustomer:'',
    
   
       
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
