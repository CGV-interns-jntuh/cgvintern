import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-map-location-create',
  templateUrl: './map-location-create.component.html',
  styleUrls: ['./map-location-create.component.css'],
})
export class MapLocationCreateComponent implements OnInit {
  storer: any;
  form!: FormGroup;
  result: any;
  constructor(
    public iHeaderSvc: IheaderService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MapLocationCreateComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      BuildingNumber: '',
      Floor: '',
      Aisle: '',
      Slot: '',
      PalletsHigh: '',
      Deep: '',
      SlotHeight: '',
      Width: '',
      Deep1: '',
      PickingSequence: '',
      WarehouseZone: '',
      ReservedSlot: false,
      ReservedStorerNumber: '',
      ReservedStorerSuffix: '',
      ReservedItemcode: '',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  maplocationscreate() {}

  backstorer() {}
}
