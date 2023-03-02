import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-postal-abbreviations-add',
  templateUrl: './postal-abbreviations-add.component.html',
  styleUrls: ['./postal-abbreviations-add.component.css']
})
export class PostalAbbreviationsAddComponent implements OnInit {

  form!: FormGroup;
  
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<PostalAbbreviationsAddComponent>
  ) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      Country:'',
      AbbrevType:'',
      Abbrev:'',
      Value:'',
      Description:''
    })
  }

  addPAbbrev(){
    console.log(this.form.value)
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
