import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';
import { GlobalComponent } from 'src/app/Global-Component';

@Component({
  selector: 'app-storer-edit-account-attribute',
  templateUrl: './storer-edit-account-attribute.component.html',
  styleUrls: ['./storer-edit-account-attribute.component.css']
})
export class StorerEditAccountAttributeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(public iHeaderSvc: IheaderService, 
   @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<StorerEditAccountAttributeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Attribute: 'KNVERIFY',
    Attribute_Description: 'KNVERIFY',

    

       
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
