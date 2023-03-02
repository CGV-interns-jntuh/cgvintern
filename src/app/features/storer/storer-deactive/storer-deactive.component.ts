import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-deactive',
  templateUrl: './storer-deactive.component.html',
  styleUrls: ['./storer-deactive.component.css']
})
export class StorerDeactiveComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;

  constructor(
    private activeRouter:ActivatedRoute, 
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerDeactiveComponent>
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
     storer:11,
     name:'Escobedo Plant 11',
     buliding:'One',
     primaryAccountRep:''

     });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  deactivateStorer(){
    
  }
}
