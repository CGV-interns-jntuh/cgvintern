import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-inventory-lp-book-to-count',
  templateUrl: './inventory-lp-book-to-count.component.html',
  styleUrls: ['./inventory-lp-book-to-count.component.css']
})
export class InventoryLpBookToCountComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InventoryLpBookToCountComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    sortorder: 'Item, ',
    listingType:'',
   
       
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
