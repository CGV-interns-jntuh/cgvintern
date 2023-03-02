import { GlobalComponent } from './../../../Global-Component';
import { IbuildingsService } from './../ibuildings.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-building',
  templateUrl: './delete-building.component.html',
  styleUrls: ['./delete-building.component.css'],
})
export class DeleteBuildingComponent implements OnInit {
  building: any;
  form!: FormGroup;
  constructor(
    public ibuildingSvc: IbuildingsService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteBuildingComponent>
  ) {}
  result: any;
  ngOnInit(): void {
    this.building = this.anyvariable;
    this.form = this.fb.group({
      buildingNumber: 2,
      buildingName: 'M&W Distribution #2',
      address: '1785 Westgate Parkway Atlanta GA',
    });
  }
  deleteBuilding() {
    this.result = this.ibuildingSvc
      .deleteBuilding(GlobalComponent.user)
      .subscribe((data: any) => {
        this.result = data;
        var msg = JSON.parse(this.result).returnedData.message;
        console.log(msg);
        this.successMessage(msg);
      });
  }
  successMessage(msg: any) {
    Swal.fire(msg, '', 'success');
    this.dialogRef.close();
  }
  closeDialog() {
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
