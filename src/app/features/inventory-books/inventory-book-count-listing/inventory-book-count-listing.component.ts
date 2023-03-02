import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-inventory-book-count-listing',
  templateUrl: './inventory-book-count-listing.component.html',
  styleUrls: ['./inventory-book-count-listing.component.css']
})
export class InventoryBookCountListingComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InventoryBookCountListingComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    sortOrder: '  ',
    listingType:' ',
    showBookCount:'',
    sequenceNumber:'',
    item:'',
    location:'',
  
    


  
       
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
