import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { WwBoxesAddComponent } from './ww-boxes-add/ww-boxes-add.component';
import { WwBoxesBundleLabelsComponent } from './ww-boxes-bundle-labels/ww-boxes-bundle-labels.component';
import { WwBoxesBundleManifestComponent } from './ww-boxes-bundle-manifest/ww-boxes-bundle-manifest.component';
import { WwBoxesChangeComponent } from './ww-boxes-change/ww-boxes-change.component';
import { WwBoxesChgCustomerComponent } from './ww-boxes-chg-customer/ww-boxes-chg-customer.component';
import { WwBoxesDeleteComponent } from './ww-boxes-delete/ww-boxes-delete.component';
import { WwBoxesDetailsComponent } from './ww-boxes-details/ww-boxes-details.component';
import { WwBoxesEventInquiryComponent } from './ww-boxes-event-inquiry/ww-boxes-event-inquiry.component';
import { WwBoxesExportBoxComponent } from './ww-boxes-export-box/ww-boxes-export-box.component';
import { WwBoxesInquiryComponent } from './ww-boxes-inquiry/ww-boxes-inquiry.component';
import { WwBoxesItemLabelsComponent } from './ww-boxes-item-labels/ww-boxes-item-labels.component';
import { WwBoxesUpdateStatusComponent } from './ww-boxes-update-status/ww-boxes-update-status.component';
import { WwBoxesUpdateStsDeleteComponent } from './ww-boxes-update-sts-delete/ww-boxes-update-sts-delete.component';

@Component({
  selector: 'app-work-with-boxes',
  templateUrl: './work-with-boxes.component.html',
  styleUrls: ['./work-with-boxes.component.css']
})
export class WorkWithBoxesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Box Number',
    'Age',
    'Customer',
    'Location',
    'Sts',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      BoxNumber:'James Box 1',
      Age:'',
      Customer:'JAMES JAMES',
      Location:'RCV/DST',
      Sts:'RCV'

    },

    {
      BoxNumber:'James Box 2',
      Age:'',
      Customer:'JAMES JAMES',
      Location:'RCV/DST',
      Sts:'ADD'

    }

  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      BoxNumber:'',
      Location:'',
      RefBox:'',
      Customer:'',
      Reference:'',
      Status:'',
      Desc:'',
      OnlyActive:''

    })

    this.dataSource = this.duplicateSource;
  }


  addBoxes()
  {
   this.matDialog.open(WwBoxesAddComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  changeBoxes()
  {
   this.matDialog.open(WwBoxesChangeComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  deleteBoxes()
  {
   this.matDialog.open(WwBoxesDeleteComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  boxesDetails()
  {
   this.matDialog.open(WwBoxesDetailsComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  boxesEventInquiry()
  {
   this.matDialog.open(WwBoxesEventInquiryComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  boxesInquiry()
  {
   this.matDialog.open(WwBoxesInquiryComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  boxesItemLabel()
  {
   this.matDialog.open(WwBoxesItemLabelsComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  boxesBundleLabel()
  {
   this.matDialog.open(WwBoxesBundleLabelsComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  boxesBundleManifest()
  {
   this.matDialog.open(WwBoxesBundleManifestComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  boxesupdateStsDelete()
  {
   this.matDialog.open(WwBoxesUpdateStsDeleteComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  boxesupdateStatus()
  {
   this.matDialog.open(WwBoxesUpdateStatusComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  boxesChgCustomer()
  {
   this.matDialog.open(WwBoxesChgCustomerComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  boxesExportBox()
  {
   this.matDialog.open(WwBoxesExportBoxComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  }


