import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-account-attributes',
  templateUrl: './storer-account-attributes.component.html',
  styleUrls: ['./storer-account-attributes.component.css'],
})
export class StorerAccountAttributesComponent implements OnInit {
  displayedColumns: string[] = ['Attribute', 'AttributeValue'];

  form = this.fb.group({
    customer: 11,
  });

  constructor(
    private activeRouter: ActivatedRoute,
    public iHeaderSvc: IheaderService,
    private router: Router,
    private matDialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerAccountAttributesComponent>
  ) {}
  ngOnInit(): void {
    this.posting();
  }
  user = GlobalComponent.user;
  building = 13;
  TallyHeaders: any = [];
  duplicateSource = [];
  id: any;
  postingDate: any;
  result: any;
  dataSource: any;

  workHeaders: any = [];

  posting() {
    this.TallyHeaders = this.iHeaderSvc
      .getAll(this.user, this.building)
      .subscribe((data) => {
        this.result = data;
        this.TallyHeaders = data;
        var res = this.result[0].data[1]?.value;

        var parsedData = JSON.parse(res);
        this.dataSource = parsedData.returnedData;
        this.duplicateSource = this.dataSource;
        console.log(this.dataSource);
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
