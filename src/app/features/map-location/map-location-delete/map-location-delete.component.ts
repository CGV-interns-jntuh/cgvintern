import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';
import { GlobalComponent } from 'src/app/Global-Component';
import { IMapLocationService } from '../i-map-location.service';

@Component({
  selector: 'app-map-location-delete',
  templateUrl: './map-location-delete.component.html',
  styleUrls: ['./map-location-delete.component.css'],
})
export class MapLocationDeleteComponent implements OnInit {
  form!: FormGroup;
  result: any;

  constructor(
    public iMapSvc: IMapLocationService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<MapLocationDeleteComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      buildingNumber: 1,
      floor: '',
      aisle: 'A',
      slot: 1,
    });
  }

  closeDialog() {
    this.dialogRef.close(); // <- Close the mat dialog
  }

  deleteMapLocation() {
    this.result = this.iMapSvc
      .deleteMapLocation(GlobalComponent.user)
      .subscribe((data: any) => {
        this.result = data;
        console.log(this.result);
      });
  }
}
