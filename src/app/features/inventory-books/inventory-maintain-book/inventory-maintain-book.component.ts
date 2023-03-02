import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-inventory-maintain-book',
  templateUrl: './inventory-maintain-book.component.html',
  styleUrls: ['./inventory-maintain-book.component.css']
})
export class InventoryMaintainBookComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InventoryMaintainBookComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    bookHeader: ' JST1201 ',
    bookDescription:'Extract of Storer 1201 on 11/26/19',
    frmTag:1,
    toTag:100,
  
       
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
