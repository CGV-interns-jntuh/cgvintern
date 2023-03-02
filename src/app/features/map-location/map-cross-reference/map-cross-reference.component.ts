import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMapLocationService } from '../i-map-location.service';

@Component({
  selector: 'app-map-cross-reference',
  templateUrl: './map-cross-reference.component.html',
  styleUrls: ['./map-cross-reference.component.css'],
})
export class MapCrossReferenceComponent implements OnInit {
  item: any;
  form!: FormGroup;
  constructor(
    public iMapSvc: IMapLocationService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MapCrossReferenceComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      B: '',
      F: '',
      A: '',
      S: '',
      XReference: '',
    });
  }
  maplocationsref() {
    console.log('reference');
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
