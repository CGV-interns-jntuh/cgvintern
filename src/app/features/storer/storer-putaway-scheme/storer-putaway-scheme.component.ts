import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-putaway-scheme',
  templateUrl: './storer-putaway-scheme.component.html',
  styleUrls: ['./storer-putaway-scheme.component.css']
})
export class StorerPutawaySchemeComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerPutawaySchemeComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Scheme1:'',
      Scheme2:'',
      Scheme3:'',
      Scheme5:'',
      Scheme4:'',
      Scheme6:'',
      Scheme7:'',
      Scheme8:'',
      Scheme9:'',
      Scheme10:''
    })


  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
