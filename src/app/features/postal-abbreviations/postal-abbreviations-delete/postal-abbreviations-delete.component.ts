import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-postal-abbreviations-delete',
  templateUrl: './postal-abbreviations-delete.component.html',
  styleUrls: ['./postal-abbreviations-delete.component.css']
})
export class PostalAbbreviationsDeleteComponent implements OnInit {

  form!: FormGroup;
  
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<PostalAbbreviationsDeleteComponent>
  ) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      Country: this.anyvariable.Country,
      AbbrevType:this.anyvariable.AbbrevType,
      Abbrev:this.anyvariable.Abbrev,
      Value:this.anyvariable.Value
    })
  }

  deletePAbbrev(){
    console.log(this.form.value)
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
