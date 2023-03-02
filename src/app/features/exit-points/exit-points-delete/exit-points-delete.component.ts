import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';
import Swal from 'sweetalert2';
import { IheaderService } from '../../tallys/iheader.service';
import { IexitPointsService } from '../iexit-points.service';

@Component({
  selector: 'app-exit-points-delete',
  templateUrl: './exit-points-delete.component.html',
  styleUrls: ['./exit-points-delete.component.css'],
})
export class ExitPointsDeleteComponent implements OnInit {
  storer: any;
  form!: FormGroup;
  result: any;
  constructor(
    public iExitSvc: IexitPointsService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ExitPointsDeleteComponent>
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

  delete() {
    this.result = this.iExitSvc
      .deleteExitPoint(GlobalComponent.user)
      .subscribe((data: any) => {
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
