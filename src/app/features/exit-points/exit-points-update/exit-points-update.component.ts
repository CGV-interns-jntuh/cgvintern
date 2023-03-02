import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';
import Swal from 'sweetalert2';
import { IheaderService } from '../../tallys/iheader.service';
import { IexitPointsService } from '../iexit-points.service';

@Component({
  selector: 'app-exit-points-update',
  templateUrl: './exit-points-update.component.html',
  styleUrls: ['./exit-points-update.component.css'],
})
export class ExitPointsUpdateComponent implements OnInit {
  storer: any;
  form!: FormGroup;
  result: any;
  constructor(
    public iExitSvc: IexitPointsService,

    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ExitPointsUpdateComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer: '',
      Exit_Point: 'BILL_INQ',
      Choice: 'OBP33R',
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  update() {
    var res = this.form.value;
    console.log(res);

    this.iExitSvc.updateExitPoint(GlobalComponent.user).subscribe((data) => {
      this.result = data;
      var msg = JSON.parse(this.result).returnedData.message;

      this.successMessage(msg);
    });
  }
  successMessage(msg: any) {
    Swal.fire(msg, '', 'success');
    this.dialogRef.close();
  }
}
