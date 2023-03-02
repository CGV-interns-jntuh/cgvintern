import { GlobalComponent } from './../../../Global-Component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-add-campus-building',
  templateUrl: './add-campus-building.component.html',
  styleUrls: ['./add-campus-building.component.css'],
})
export class AddCampusBuildingComponent implements OnInit {
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    public iHeaderSvc: IheaderService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddCampusBuildingComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Region: '',
      Campus: '',
      Building: null,
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
  addCampusBuilding() {}
}
