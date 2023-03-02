import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.css']
})
export class ContentAddComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ContentAddComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
      BoxNumber:'JAMES BOX 2',
      Location:'RCV/DST',
      Customer:'JAMES',
      Bundles:'',
      ContentCount:1,
      Bundle:'',
      Sequence:'',
      ContentID:'',
      Segment:'',
      XReference:'',
      Source:'',
      Asset:'',
      Filetype:'',
      MajorDesc:'',
      MinorDesc:'',
      ClientId:'',
      ClientGroup:'',
      FromToDates:'-',
      AgeClass:'',
      SchdDestry:'',
      RetentionCode:'',
      Status:'',

    
       
    });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  attributes(){
    
  }

}
