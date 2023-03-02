import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-inventory-book-reserve-post',
  templateUrl: './inventory-book-reserve-post.component.html',
  styleUrls: ['./inventory-book-reserve-post.component.css']
})
export class InventoryBookReservePostComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InventoryBookReservePostComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    bookHeader: ' JST1201 ',
    bookDate:' 11/26/19',
    bookDescription:'Extract of Storer 1201 on 11/26/19',
    numberOfCounts:2,
    frmTag:1,
    toTag:100,
    bookCreator:'TTATMAN',
    bookStatus:'CV',


    
  
    


  
       
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
