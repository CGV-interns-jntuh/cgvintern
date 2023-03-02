import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';
import { GlobalComponent } from 'src/app/Global-Component';

@Component({
  selector: 'app-storer-contact-delete',
  templateUrl: './storer-contact-delete.component.html',
  styleUrls: ['./storer-contact-delete.component.css']
})
export class StorerContactDeleteComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerContactDeleteComponent>

  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Consignee: 'STOR0011',
      contactName:'kpaver',
      telePhone:'',
      cellPhone:'',
      contactType:'CSR',
      faxNumber:'',
      emailAddress:'kpaver@CTCODEWORKS.COM',
      statusCode:'AC'
     });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  deleteStorerContact(){
    
  }
}
