import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-dock-schedule-create',
  templateUrl: './dock-schedule-create.component.html',
  styleUrls: ['./dock-schedule-create.component.css']
})
export class DockScheduleCreateComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<DockScheduleCreateComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      StorerNumber:'',
      AppointmentReference:'',
      IOFlag:'',
      TallyBillNumber:'',
      CarrierCode:'',
      AppointmentDate:'12/29/2022',
      AppointmentTime:'',
      BuildingNumber:'',
      TRCarNumber:'',
      Comment:''
     });
  }

  addDocScheduler(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
