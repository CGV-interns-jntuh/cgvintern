import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ltl-batch-change',
  templateUrl: './ltl-batch-change.component.html',
  styleUrls: ['./ltl-batch-change.component.css']
})
export class LtlBatchChangeComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<LtlBatchChangeComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      BatchNumber:this.anyvariable.BatchNumber,
      SCACCode:this.anyvariable.SCACCode,
      NumberofShipments:this.anyvariable.NumberofShipments,
      ScheduledShipDate:this.anyvariable.ScheduledShipDate,
      ChangedBy:this.anyvariable.ChangedBy,
      Status:this.anyvariable.Status
     });
  }

  changeLTI(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
