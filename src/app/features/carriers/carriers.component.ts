import { GlobalComponent } from './../../Global-Component';
import { DeleteCarriersComponent } from './delete-carriers/delete-carriers.component';
import { UpdateCarriersComponent } from './update-carriers/update-carriers.component';
import { CreateCarriersComponent } from './create-carriers/create-carriers.component';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.css'],
})
export class CarriersComponent implements OnInit {
  displayedColumns: string[] = [
    'CarrierCode',
    'CarrierName',
    'ZipCode',
    'Suffix',
    'PalletExch',
    'Hazmat',
    'Actions',
  ];

  form = this.fb.group({
    carrierCode: [null],
    carrierName: [null],
    suffix: [null],
    pallet: [null],
    hazmat: [null],
    zipcode: [null],
  });

  constructor(
    private activeRouter: ActivatedRoute,
    public iHeaderSvc: IheaderService,
    private router: Router,
    private matDialog: MatDialog,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.posting();
  }
  TallyHeaders: any = [];
  id: any;
  postingDate: any;
  result: any;
  dataSource: any = [];
  duplicateSource: any = [];
  @ViewChild('paginator') paginator!: MatPaginator;
  workHeaders: any = [];

  posting() {
    this.TallyHeaders = this.iHeaderSvc
      .getAll(GlobalComponent.user, GlobalComponent.building)
      .subscribe((data) => {
        this.result = data;
        this.TallyHeaders = data;
        var res = this.result[0].data[1]?.value;

        var parsedData = JSON.parse(res);
        this.duplicateSource = parsedData.returnedData;
        console.log(this.duplicateSource);

        this.dataSource = new MatTableDataSource(this.duplicateSource);
        this.dataSource.paginator = this.paginator;
      });
  }

  carrierCreate() {
    this.matDialog.open(CreateCarriersComponent, {
      width: '1000px',
      maxHeight: '80vh',

      // "data": storer,
      autoFocus: false,
    });
  }

  carrierUpdate() {
    this.matDialog.open(UpdateCarriersComponent, {
      width: '1000px',
      maxHeight: '80vh',

      // "data": storer,
      autoFocus: false,
    });
  }

  carrierDelete() {
    this.matDialog.open(DeleteCarriersComponent, {
      width: '1000px',
      maxHeight: '80vh',

      // "data": storer,
      autoFocus: false,
    });
  }
}
