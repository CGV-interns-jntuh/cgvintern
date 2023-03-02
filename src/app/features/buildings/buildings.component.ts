import { GlobalComponent } from './../../Global-Component';
import { BuildingContactComponent } from './building-contact/building-contact.component';
import { DoorsComponent } from './doors/doors.component';
import { DeleteBuildingComponent } from './delete-building/delete-building.component';
import { UpdateBuildingComponent } from './update-building/update-building.component';
import { CreateBuildingComponent } from './create-building/create-building.component';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IbuildingsService } from './ibuildings.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Building {
  name: string;
  address: string;
  zip: number;
}

const ELEMENT_DATA: Building[] = [
  {
    name: 'A',
    address: 'Address',
    zip: 43312,
  },
  {
    name: 'B',
    address: 'Address2',
    zip: 12345,
  },
];

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
})
export class BuildingsWorkWithComponent implements OnInit {
  displayedColumns: string[] = ['No', 'Name', 'Address', 'Zip', 'Actions'];

  form = this.fb.group({
    building: [null],
    name: [null],
    address: [null],
    zip: [null],
  });
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    public ibuildingSvc: IbuildingsService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}

  id: any;
  result: any;
  dataSource: any = [];
  duplicateSource: any = [];
  @ViewChild('paginator') paginator!: MatPaginator;
  BuildingHeaders: any = [];

  ngOnInit(): void {
    this.getBuilding();
  }
  getBuilding() {
    this.ibuildingSvc.getBuilding(GlobalComponent.user).subscribe((data) => {
      this.result = data;
      var res = this.result;

      var parsedData = JSON.parse(res);
      this.duplicateSource = parsedData.returnedData;

      this.dataSource = new MatTableDataSource(this.duplicateSource);
      this.dataSource.paginator = this.paginator;
    });
  }

  closeDialog() {
    // this.dialogRef.close();
  }
  updateForm() {
    this.matDialog.open(UpdateBuildingComponent, {
      width: '850px',
      maxHeight: '105vh',
      autoFocus: false,
    });
  }

  addBuilding() {
    this.matDialog.open(CreateBuildingComponent, {
      width: '850px',
      maxHeight: '100vh',
      autoFocus: false,
    });
  }

  deleteForm() {
    this.matDialog.open(DeleteBuildingComponent, {
      width: '1250px',
      maxHeight: '355vh',
      autoFocus: false,
    });
  }
  doorForm() {
    this.matDialog.open(DoorsComponent, {
      width: '1250px',
      maxHeight: '355vh',
      autoFocus: false,
    });
  }
  buildingContact() {
    this.matDialog.open(BuildingContactComponent, {
      width: '1250px',
      maxHeight: '355vh',
      autoFocus: false,
    });
  }
}
