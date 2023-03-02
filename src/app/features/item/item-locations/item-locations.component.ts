import { DeleteitemlocationComponent } from './deleteitemlocation/deleteitemlocation.component';
import { SideAdjustmentComponent } from './side-adjustment/side-adjustment.component';
import { CreateitemLocationComponent } from './createitem-location/createitem-location.component';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TwoSideAdjustmentComponent } from './two-side-adjustment/two-side-adjustment.component';
import { ReSequenceComponent } from './re-sequence/re-sequence.component';
@Component({
  selector: 'app-item-locations',
  templateUrl: './item-locations.component.html',
  styleUrls: ['./item-locations.component.css'],
})
export class ItemLocationsComponent implements OnInit {
  displayedColumns: string[] = [
    'BldNbr',
    'Floor',
    'Aisle',
    'Slot',
    'LotCode1',
    'FirstReceived',
    'TotalCapacity',
    'OnHand',
    'AddlCapacity',
    'Actions',
  ];

  duplicateSource: any = [
    {
      BldNbr: 13,
      Floor: '',
      Aisle: 1,
      Slot: 'A',
      LotCode1: '',
      FirstReceived: '09/24/2020',
      TotalCapacity: '',
      OnHand: 105,
      AddlCapacity: 0,
    },
    {
      BldNbr: 13,
      Floor: '',
      Aisle: 'DOCK',
      Slot: '',
      LotCode1: '',
      FirstReceived: '10/31/2022',
      TotalCapacity: '',
      OnHand: '1-',
      AddlCapacity: 0,
    },
  ];

  constructor(
    private activeRouter: ActivatedRoute,
    public iHeaderSvc: IheaderService,
    private router: Router,
    private matDialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ItemLocationsComponent>
  ) {}
  @ViewChild('paginator') paginator!: MatPaginator;
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      storer: '0013 Neils Item Storer',
      item: this.anyvariable.ItemCode,
      location: [null],
    });
    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }
  user = 'NKOHAN';
  building = 13;
  TallyHeaders: any = [];
  id: any;
  postingDate: any;
  result: any;
  dataSource: any = [];

  workHeaders: any = [];

  itemLocationCreate() {
    this.matDialog.open(CreateitemLocationComponent, {
      width: '1200px',
      maxHeight: '95vh',
      autoFocus: false,
    });
  }
  itemLocationDelete(element: any) {
    this.matDialog.open(DeleteitemlocationComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data: element,
      autoFocus: false,
    });
  }
  itemAdjustment1(element: any) {
    this.matDialog.open(SideAdjustmentComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data: element,
      autoFocus: false,
    });
  }
  item2SideAdjustment(element: any) {
    this.matDialog.open(TwoSideAdjustmentComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data: element,
      autoFocus: false,
    });
  }
  itemResequence(element: any) {
    this.matDialog.open(ReSequenceComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data: element,
      autoFocus: false,
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
