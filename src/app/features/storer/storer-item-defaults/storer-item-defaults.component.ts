import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-item-defaults',
  templateUrl: './storer-item-defaults.component.html',
  styleUrls: ['./storer-item-defaults.component.css']
})
export class StorerItemDefaultsComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerItemDefaultsComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Storer:'599 M&W Test Storer 1',
      ILabel1:'User 1',
      ILabel2:'User 2',
      ILabel3:'User 3',
      ILabel4:'User 4',
      AllItemsLotted:'',
      LClabels1:'',
      LClabels2:'',
      LClabels3:'',
      PrimaryMask:'',
      SortMask1:'',
      SortMask2:'',
      SortMask3:''
    })

  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
