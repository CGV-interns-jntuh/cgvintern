import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-ucc-ser-ctl',
  templateUrl: './storer-ucc-ser-ctl.component.html',
  styleUrls: ['./storer-ucc-ser-ctl.component.css']
})
export class StorerUccSerCtlComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerUccSerCtlComponent>
  ) { }

  displayedColumns: string[] = [
    'Label Type',
    'Lead Digits',
    'Manufacturer Number',
    'Sequence Number',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      LabelType:'',
      LeadDigits:'',
      ManufacturerNumber:'',
      SequenceNumber:''
    }
  ]

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Storer:'65 Escobedo Plant 65'
    })

    this.dataSource = this.duplicateSource;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
