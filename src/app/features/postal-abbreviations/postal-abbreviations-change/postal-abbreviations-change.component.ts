import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-postal-abbreviations-change',
  templateUrl: './postal-abbreviations-change.component.html',
  styleUrls: ['./postal-abbreviations-change.component.css']
})
export class PostalAbbreviationsChangeComponent implements OnInit {

  form!: FormGroup;
  
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<PostalAbbreviationsChangeComponent>
  ) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      Country: this.anyvariable.Country,
      AbbrevType:this.anyvariable.AbbrevType,
      Abbrev:this.anyvariable.Abbrev,
      Value:this.anyvariable.Value,
      Description:''
    })
  }

  changePAbbrev(){
    console.log(this.form.value)
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
