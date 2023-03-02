import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-export',
  templateUrl: './storer-export.component.html',
  styleUrls: ['./storer-export.component.css']
})
export class StorerExportComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerExportComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Storer:'65',
      FromLibrary:'WDLSDTEST',
      ToLibrary:'',
      submitToBatch:''
    })

  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
