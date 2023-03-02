import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-application-change',
  templateUrl: './application-change.component.html',
  styleUrls: ['./application-change.component.css']
})
export class ApplicationChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ApplicationChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
      Application: 'WDLS Yard Management',
    Application_Sequence:'3'
 

       
    });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  update(){
    
  }

}
