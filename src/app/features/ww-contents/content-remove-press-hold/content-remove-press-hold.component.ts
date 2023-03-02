import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-content-remove-press-hold',
  templateUrl: './content-remove-press-hold.component.html',
  styleUrls: ['./content-remove-press-hold.component.css']
})
export class ContentRemovePressHoldComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ContentRemovePressHoldComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
      BoxNumber:'JAMES BOX 2',
      ContentIdentifier:'305163IN',
      Reference:'',
      Comment:''

     

    
       
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
