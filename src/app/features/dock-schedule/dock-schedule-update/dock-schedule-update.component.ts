import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-dock-schedule-update',
  templateUrl: './dock-schedule-update.component.html',
  styleUrls: ['./dock-schedule-update.component.css']
})
export class DockScheduleUpdateComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<DockScheduleUpdateComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      StorerNumber:'13',
      AppointmentReference:'Node Test 2',
      IOFlag:'I',
      TallyBillNumber:'',
      CarrierCode:'AMEX',
      AppointmentDate:'12/29/22',
      AppointmentTime:'12:00',
      BuildingNumber:'13',
      TRCarNumber:'',
      Comment:''
     });
  }

  changeDocScheduler(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
