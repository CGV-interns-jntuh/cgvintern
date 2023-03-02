import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-edi-documents',
  templateUrl: './storer-edi-documents.component.html',
  styleUrls: ['./storer-edi-documents.component.css']
})
export class StorerEdiDocumentsComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerEdiDocumentsComponent>
  ) { }

  displayedColumns: string[] = [
    'IO',
    'Document Type',
    'Application Name',
    'Validity program',
    'Validity Message File',
    'Status',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      IO:'',
      DocumentType:'',
      ApplicationName:'',
      Validityprogram:'',
      ValidityMessageFile:'',
      Status:''
    }
  ]

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Storer:102
      
    })

    this.dataSource = this.duplicateSource;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
