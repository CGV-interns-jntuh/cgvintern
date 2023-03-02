import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-inventory-books-missing-count',
  templateUrl: './inventory-books-missing-count.component.html',
  styleUrls: ['./inventory-books-missing-count.component.css']
})
export class InventoryBooksMissingCountComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InventoryBooksMissingCountComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    sortOrder: ' Item Location , Routing, Team ',
    listingType:'*ANY,Team',
  
    


  
       
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
