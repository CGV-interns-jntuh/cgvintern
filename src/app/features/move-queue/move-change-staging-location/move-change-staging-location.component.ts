import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-move-change-staging-location',
  templateUrl: './move-change-staging-location.component.html',
  styleUrls: ['./move-change-staging-location.component.css']
})
export class MoveChangeStagingLocationComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<MoveChangeStagingLocationComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Item: ' ',
    Lots: '',
    From: '13 1/A',
    Source:'123455240',
    To: '13 DOCK/1  ',
    NewStaginglocation: '',
    Changeforonlythismove: ' N ',
    Changeallmovesforthisdocument: 'Y',
   


  
       
    });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  location(){
    
  }

}
