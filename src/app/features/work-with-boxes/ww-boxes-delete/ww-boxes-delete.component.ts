import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ww-boxes-delete',
  templateUrl: './ww-boxes-delete.component.html',
  styleUrls: ['./ww-boxes-delete.component.css']
})
export class WwBoxesDeleteComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<WwBoxesDeleteComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      BoxNumber:'0420201601',
      RecordSource:'Interenal',
      BoxSize:'00120',
      FileType:'XXX',
      ContentFromDate:'0001-01-01',
      ContentToDate:'9999-12-31',
      AgeClass:'2',
      Customer:'James',
      CustomerDivision:'',
      CustomerDepartment:'',
      CustomerBoxNumber:'',
      Description:'123',
      OriginatingDistrict:'',
      OriginatingBuliding:'',
      BoxLocation:'ANTH/ONY1',
      BoxStatus:''
      

     });
  }

  deleteBox(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
