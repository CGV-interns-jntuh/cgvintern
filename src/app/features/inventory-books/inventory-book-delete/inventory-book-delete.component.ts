import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-inventory-book-delete',
  templateUrl: './inventory-book-delete.component.html',
  styleUrls: ['./inventory-book-delete.component.css']
})
export class InventoryBookDeleteComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InventoryBookDeleteComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    name: ' JOHNTEST01 ',
    description:' Extract of Storer 0100 on 12/06/19',
    creator:'JKOHAN',
    bookDate:'12/06/19',
    
  
    


  
       
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
