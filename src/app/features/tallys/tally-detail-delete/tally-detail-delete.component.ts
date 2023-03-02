import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../iheader.service';

@Component({
  selector: 'app-tally-detail-delete',
  templateUrl: './tally-detail-delete.component.html',
  styleUrls: ['./tally-detail-delete.component.css']
})
export class TallyDetailDeleteComponent implements OnInit {

  tally : any;
  form!: FormGroup;

  constructor( public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TallyDetailDeleteComponent>) { }

  ngOnInit(): void {
    this.tally=this.anyvariable;
    this.form = this.fb.group({
      tally: this.tally,
      linenumber: '',
      storer:'',
      item:'',
      lots:'',
      received:'',
      intransit:''
    });
  }

  deletetallyDetail(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
