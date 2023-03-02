import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-ucc-lbl-ctl',
  templateUrl: './storer-ucc-lbl-ctl.component.html',
  styleUrls: ['./storer-ucc-lbl-ctl.component.css']
})
export class StorerUccLblCtlComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerUccLblCtlComponent>
  ) { }

  displayedColumns: string[] = [
    'Consignee',
    'Form',
    'Lbl Typ',
    'Message File',
    'Validity Program',
    'Label Name',
    'Output Queue',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Consignee:'',
      Form:'',
      LblTyp:'',
      MessageFile:'',
      ValidityProgram:'',
      LabelName:'',
      OutputQueue:''
    }
  ]

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Storer:'65 Escobedo Plant 65',
      Consignee:''
    })

    this.dataSource = this.duplicateSource;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
