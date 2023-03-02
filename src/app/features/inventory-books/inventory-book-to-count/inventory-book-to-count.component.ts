import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-inventory-book-to-count',
  templateUrl: './inventory-book-to-count.component.html',
  styleUrls: ['./inventory-book-to-count.component.css']
})
export class InventoryBookToCountComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InventoryBookToCountComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    showLotBreakouts: 'Y  ',
    sort:'I ',
    minDevianceToShow:'',
    Email:'',
  
    


  
       
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
