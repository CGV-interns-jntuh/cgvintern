import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-map-location-update',
  templateUrl: './map-location-update.component.html',
  styleUrls: ['./map-location-update.component.css'],
})
export class MapLocationUpdateComponent implements OnInit {
  storer: any;
  form!: FormGroup;
  result: any;
  constructor(
    public iHeaderSvc: IheaderService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MapLocationUpdateComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      BuildingNumber: '1',
      Floor: '',
      Aisle: 'A',
      Slot: 1,
      PalletsHigh: 99,
      Deep: 99,
      SlotHeight: '',
      Width: '',
      Deep1: '',
      PickingSequence: '',
      WarehouseZone: '',
      ReservedSlot: true,
      ReservedStorerNumber: '',
      ReservedStorerSuffix: '',
      ReservedItemcode: '',
    });
  }

  maplocationsupdate() {}

  closeDialog() {
    this.dialogRef.close();
  }

  backstorer() {}
}
