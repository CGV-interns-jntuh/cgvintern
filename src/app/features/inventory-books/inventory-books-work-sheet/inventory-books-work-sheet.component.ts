import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-inventory-books-work-sheet',
  templateUrl: './inventory-books-work-sheet.component.html',
  styleUrls: ['./inventory-books-work-sheet.component.css']
})
export class InventoryBooksWorkSheetComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InventoryBooksWorkSheetComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    showLotCodes: 'Y ',
    breakByAisle:'N',
    listRecountsOnly:'N',
    showItemDescription:'N',
    printOddEvenorBoth:'B',
  
   
       
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
