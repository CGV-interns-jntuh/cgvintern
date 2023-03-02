import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-delete',
  templateUrl: './storer-delete.component.html',
  styleUrls: ['./storer-delete.component.css']
})
export class StorerDeleteComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;

  constructor(
    private activeRouter:ActivatedRoute, 
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerDeleteComponent>
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
     storer:102,
     address:'',
     phone:'Hilard OH 43026',
    // primaryAccountRep:''

     });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  deleteStorer(){
    
  }

}
