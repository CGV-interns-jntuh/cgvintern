import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-comments',
  templateUrl: './storer-comments.component.html',
  styleUrls: ['./storer-comments.component.css']
})
export class StorerCommentsComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerCommentsComponent>
  ) { }

  displayedColumns: string[] = [
    'ID',
    'Key',
    'Tp',
    'Seq',
    'Comment',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      ID:'ST',
      Key:'0069',
      Tp:'',
      Seq:'',
      Comment:'Comments'
    }
  ]

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      FileId:'ST',
      Key:'0065',
      SubType:''
    })

    this.dataSource = this.duplicateSource;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
