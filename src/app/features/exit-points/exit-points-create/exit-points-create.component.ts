import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';
import Swal from 'sweetalert2';
import { IheaderService } from '../../tallys/iheader.service';
import { IexitPointsService } from '../iexit-points.service';

@Component({
  selector: 'app-exit-points-create',
  templateUrl: './exit-points-create.component.html',
  styleUrls: ['./exit-points-create.component.css'],
})
export class ExitPointsCreateComponent implements OnInit {
  storer: any;
  form!: FormGroup;
  result: any;
  constructor(
    public iExitSvc: IexitPointsService,

    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ExitPointsCreateComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer: '',
      Suffix: '',
      Exit_Point: '',
      Choice: '',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  backstorer() {}

  create() {
    var res = this.form.value;
    console.log(res);

    this.result = this.iExitSvc
      .createExitPoint(GlobalComponent.user)
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
