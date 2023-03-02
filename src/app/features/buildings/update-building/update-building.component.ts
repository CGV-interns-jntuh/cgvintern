import { GlobalComponent } from './../../../Global-Component';
import { IbuildingsService } from './../ibuildings.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-building',
  templateUrl: './update-building.component.html',
  styleUrls: ['./update-building.component.css'],
})
export class UpdateBuildingComponent implements OnInit {
  building: any;
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    public ibuildingSvc: IbuildingsService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateBuildingComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      buildingNumber: 14,
      buildingName: 'New testing Building',
      address1: '132 Test Ave',
      address2: 'Suite 102',
      zipcode: 43026,
      suffix: '',
      NumberOfDoors: 0,
    });
  }

  closeDialog() {
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  updateBuilding() {
    var res = this.form.value;
    console.log(res);

    this.result = this.ibuildingSvc
      .updateBuilding(res.user)
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
