import { GlobalComponent } from './../../Global-Component';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { LocationStatusInquiryComponent } from './location-status-inquiry/location-status-inquiry.component';
import { MapLocationCreateComponent } from './map-location-create/map-location-create.component';
import { MapLocationDeleteComponent } from './map-location-delete/map-location-delete.component';
import { MapLocationUpdateComponent } from './map-location-update/map-location-update.component';
import { IMapLocationService } from './i-map-location.service';
import { MapCrossReferenceComponent } from './map-cross-reference/map-cross-reference.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.css'],
})
export class MapLocationComponent implements OnInit {
  form!: FormGroup;

  displayedColumns: string[] = [
    'Location',
    'Zone',
    'F',
    'Rsrv_Slot',
    'Storer',
    'Item_Description',
    'PctOpen',
    'Actions',
  ];
  // dataSource = Element;

  constructor(
    private activeRouter: ActivatedRoute,
    public iMapSvc: IMapLocationService,
    private router: Router,
    private matDialog: MatDialog,
    private fb: FormBuilder // @Inject(MAT_DIALOG_DATA) public anyvariable:any, //  private dialogRef:MatDialogRef<WorkwithperiodsComponent>
  ) {}

  id: any;
  postingDate: any;
  result: any;
  // dataSource:any;
  dataSource: any = [];
  duplicateSource: any = [];
  @ViewChild('paginator') paginator!: MatPaginator;

  workHeaders: any = [];
  //id:number=0;
  ngOnInit(): void {
    this.form = this.fb.group({
      building: 13,
      zone: '',
      location: '',
      hwd: '',
      availableCapacity: '',
    });
    this.mapLocation();
  }
  TallyHeaders: any = [];
  //form!: FormGroup;

  mapLocation() {
    this.iMapSvc.getMapLocation(GlobalComponent.user).subscribe((data) => {
      this.result = data;
      var res = this.result;
      console.log(data);

      var parsedData = JSON.parse(res);
      this.duplicateSource = parsedData.returnedData;
      console.log(this.duplicateSource);

      this.dataSource = new MatTableDataSource(this.duplicateSource);
      this.dataSource.paginator = this.paginator;
    });
  }

  mapLocationCreate() {
    this.matDialog.open(MapLocationCreateComponent, {
      width: '1000px',
      maxHeight: '80vh',

      // "data": storer,
      autoFocus: false,
    });
  }

  mapLocationUpdate() {
    this.matDialog.open(MapLocationUpdateComponent, {
      width: '1000px',
      maxHeight: '80vh',

      // "data": storer,
      autoFocus: false,
    });
  }

  mapLocationDelete() {
    this.matDialog.open(MapLocationDeleteComponent, {
      width: '700px',
      maxHeight: '80vh',

      // "data": storer,
      autoFocus: false,
    });
  }

  locationStatusInquiry() {
    this.matDialog.open(LocationStatusInquiryComponent, {
      width: '1000px',
      maxHeight: '80vh',

      // "data": storer,
      autoFocus: false,
    });
  }
  XReference() {
    this.matDialog.open(MapCrossReferenceComponent, {
      width: '1000px',
      maxHeight: '80vh',

      // "data": storer,
      autoFocus: false,
    });
  }

  closeDialog() {
    //  this.dialogRef.close();
  }
  backstorer() {}
}
