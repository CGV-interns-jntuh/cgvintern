import { AddCampusBuildingComponent } from './add-campus-building/add-campus-building.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';

@Component({
  selector: 'app-campus-buildings',
  templateUrl: './campus-buildings.component.html',
  styleUrls: ['./campus-buildings.component.css'],
})
export class CampusBuildingsComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Region',
    'Campus',
    'Bldg',
    'Description',

    'Actions',
  ];

  dataSource: any = [];

  duplicateSource: any = [
    {
      Region: 'COLOMBUS',
      Campus: 'NORTH',
      Bldg: 13,
      Description: 'Neil Trading Post ',
    },
  ];

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog // @Inject(MAT_DIALOG_DATA) public anyvariable: any, // private dialogRef: MatDialogRef<AttributesComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Region: 11,
      Campus: 'DLRPACKIT',
    });

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {}

  addCampusBuilding() {
    this.matDialog.open(AddCampusBuildingComponent, {
      width: '1000px',
      maxHeight: '90vh',
      autoFocus: false,
    });
  }
  deleteCampusBuilding() {}
}
