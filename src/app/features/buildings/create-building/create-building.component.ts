import { GlobalComponent } from './../../../Global-Component';
import { IbuildingsService } from './../ibuildings.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-building',
  templateUrl: './create-building.component.html',
  styleUrls: ['./create-building.component.css'],
})
export class CreateBuildingComponent implements OnInit {
  constructor(
    private router: Router,
    public ibuildingSvc: IbuildingsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<CreateBuildingComponent>
  ) {}
  form!: FormGroup;
  result: any;
  ngOnInit(): void {
    this.form = this.fb.group({
      buildingNumber: [null],
      buildingName: [null],
      address1: [null],
      address2: [null],
      zipcode: [null],
      suffix: [null],
      NumberOfDoors: [null],
    });
  }

  onBack() {
    this.router.navigate(['building']);
  }
  closeDialog() {
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  addBuilding() {
    var res = this.form.value;
    console.log(res);
    this.result = this.ibuildingSvc
      .createBuilding(res)
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
