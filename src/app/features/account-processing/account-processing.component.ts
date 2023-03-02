import { CopyWorkflowAccountProcessingComponent } from './copy-workflow-account-processing/copy-workflow-account-processing.component';
import { DeleteAccountProcessingComponent } from './delete-account-processing/delete-account-processing.component';
import { UpdateAccountProcessingComponent } from './update-account-processing/update-account-processing.component';
import { CreateAccountProcessingComponent } from './create-account-processing/create-account-processing.component';
import { Building } from './../buildings/buildings.component';
import { GlobalComponent } from './../../Global-Component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';

@Component({
  selector: 'app-account-processing',
  templateUrl: './account-processing.component.html',
  styleUrls: ['./account-processing.component.css'],
})
export class AccountProcessingComponent implements OnInit {
  displayedColumns: string[] = [
    'Storer',
    'Process',
    'CD',
    'Description',
    'ResponsibleProfile',
    'St',
    'Actions',
  ];

  form = this.fb.group({
    storerNum: ['', [Validators.min(0), Validators.pattern('[0-9]{1,10}')]],
    process: [null],
  });
  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}
  TallyHeaders: any = [];
  user = GlobalComponent.user;
  building = GlobalComponent.building;
  result: any = [];
  dataSource = [];
  duplicateSource = [];

  ngOnInit(): void {
    this.TallyHeaders = this.iHeaderSvc
      .getAll(this.user, this.building)
      .subscribe((data) => {
        this.result = data;
        this.TallyHeaders = data;
        console.log(data);
        var res = this.result[0].data[1]?.value;
        console.log(res);
        var parsedData = JSON.parse(res);
        this.dataSource = parsedData.returnedData;
        this.duplicateSource = this.dataSource;
        console.log(this.dataSource);
      });
  }

  accountProcessingCreate() {
    this.matDialog.open(CreateAccountProcessingComponent, {
      width: '1000px',
      maxHeight: '80vh',

      autoFocus: false,
    });
  }
  accountProcessingUpdate(account: any) {
    this.matDialog.open(UpdateAccountProcessingComponent, {
      width: '1000px',
      maxHeight: '80vh',
      data: account,
      autoFocus: false,
    });
  }
  accountProcessingDelete(account: any) {
    this.matDialog.open(DeleteAccountProcessingComponent, {
      width: '1000px',
      maxHeight: '80vh',
      data: account,
      autoFocus: false,
    });
  }
  accountProcessingCopy(account: any) {
    this.matDialog.open(CopyWorkflowAccountProcessingComponent, {
      width: '1000px',
      maxHeight: '80vh',
      data: account,
      autoFocus: false,
    });
  }
}
