import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-dock-schedule-add',
  templateUrl: './dock-schedule-add.component.html',
  styleUrls: ['./dock-schedule-add.component.css']
})
export class DockScheduleAddComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<DockScheduleAddComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      ApptNo:'4267',
      Building:'930',
      BuildingBuilding:'O',
      SCACCode:'',
      ReqDateTime:'3/07/18',
      ApptType:'TR',
      LoadType:'P',
      ExpDuration:'',
      QtyExpected:'',
      WgtExpected:'22380.23',
      TrailerNo:'',
      Prty:'',
      Contact:'',
      Phone:'',
      Email:''
     });
  }

  addDocScheduler(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
