import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-box-content-remove-press-hold',
  templateUrl: './box-content-remove-press-hold.component.html',
  styleUrls: ['./box-content-remove-press-hold.component.css']
})
export class BoxContentRemovePressHoldComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BoxContentRemovePressHoldComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    boxNumber: ' JAMES BOX 1 ',
    contentIdentifier:'305136IN',
    reference:'',
    comment:'',
  
    


  
       
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
