import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-dock-schedule-info',
  templateUrl: './dock-schedule-info.component.html',
  styleUrls: ['./dock-schedule-info.component.css']
})
export class DockScheduleInfoComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<DockScheduleInfoComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer:'13',
      TallyBillNumber:'',
      StorerReferenceNo:'',
      AppointmentDateTime:'12/29/22 12:00',
      CarrierCode:'AMEX',
      DoorNumber:'',
      TRCarNumber:'',
      TimeIN:'',
      TimeOut:'',
      Spotted:'N'
     });
  }

  changeDocScheduler(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
