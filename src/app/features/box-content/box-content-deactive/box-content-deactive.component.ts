import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-box-content-deactive',
  templateUrl: './box-content-deactive.component.html',
  styleUrls: ['./box-content-deactive.component.css']
})
export class BoxContentDeactiveComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BoxContentDeactiveComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
      boxNumber: 'JAMES BOX 1',
      contentIdentifier:'305105IN',
      customer:'JAMES',
      reference:'',
     comments:'',
    
      
   
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
