import { GlobalComponent } from './../../Global-Component';
import { DeleteMapzoneComponent } from './delete-mapzone/delete-mapzone.component';
import { UpdateMapzoneComponent } from './update-mapzone/update-mapzone.component';
import { CreateMapzoneComponent } from './create-mapzone/create-mapzone.component';
import { IheaderService } from './../tallys/iheader.service';
import { ImapZoneService } from './imap-zone.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-map-zones',
  templateUrl: './map-zones.component.html',
  styleUrls: ['./map-zones.component.css'],
})
export class MapZonesComponent implements OnInit {
  displayedColumns: string[] = [
    'Building',
    'Zone',
    'Description',
    'Locns',
    'Empty',
    'Items',
    'On',
    'Hand',
    'PctOpen',
    'Actions',
  ];
  @ViewChild('paginator') paginator!: MatPaginator;

  form = this.fb.group({
    zone: [null],
    building: [null],
    description: [null],
    locns: [null],
    empty: [null],
    storerName: [null],
    items: [null],
    on: [null],
    hand: [null],
    pctOpen: [null],
  });
  result: any = [];
  dataSource: any = [];
  duplicateSource: any = [];

  user = GlobalComponent.user;
  building = GlobalComponent.building;

  constructor(
    public iMapsvc: ImapZoneService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}
  TallyHeaders: any = [];
  id: number = 0;
  ngOnInit(): void {
    this.iMapsvc.getMapZone(this.user).subscribe((data) => {
      this.result = data;
      var res = this.result;

      var parsedData = JSON.parse(res);
      this.duplicateSource = parsedData.returnedData;
      console.log(this.duplicateSource);

      this.dataSource = new MatTableDataSource(this.duplicateSource);
      this.dataSource.paginator = this.paginator;
    });
  }

  mapZoneCreate() {
    this.matDialog.open(CreateMapzoneComponent, {
      width: '800px',
      maxHeight: '100vh',
      autoFocus: false,
    });
  }

  updateMapZone() {
    this.matDialog.open(UpdateMapzoneComponent, {
      width: '800px',
      maxHeight: '100vh',
      autoFocus: false,
    });
  }

  deleteMapZone() {
    this.matDialog.open(DeleteMapzoneComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }
}
