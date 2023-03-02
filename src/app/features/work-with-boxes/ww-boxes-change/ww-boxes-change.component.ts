import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ww-boxes-change',
  templateUrl: './ww-boxes-change.component.html',
  styleUrls: ['./ww-boxes-change.component.css']
})
export class WwBoxesChangeComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<WwBoxesChangeComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      BoxNumber:'JOHN ADD',
      BoxSize:'1.20',
      Description:'123',
      SecondDesc:'',
      PrimaryRef:'',
      SecondRef:'12/29/2022',
      FileType:'',
      AgeClass:'',
      ContentRange:'',
      Retention:'',
      ScheduledDestruction:'',
      Customer:'AC753',
      RefBox:'',
      Dept:'',
      District:'',
      Division:'',
      Buliding:'',
      AlphaFrom:'',
      AlphaTo:'',
      Location:'ANTH/ONY1'

     });
  }

  changeBox(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
