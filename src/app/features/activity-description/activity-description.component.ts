import { CreateActivityDescriptionComponent } from './create-activity-description/create-activity-description.component';
import { UpdateActivityDescriptionComponent } from './update-activity-description/update-activity-description.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IheaderService } from '../tallys/iheader.service';
import { GlobalComponent } from 'src/app/Global-Component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-activity-description',
  templateUrl: './activity-description.component.html',
  styleUrls: ['./activity-description.component.css'],
})
export class ActivityDescriptionComponent implements OnInit {
  displayedColumns: string[] = ['Activity', 'Description', 'Actions'];

  form = this.fb.group({
    Activity: [null],
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

  activityDescriptionCreate() {
    this.matDialog.open(CreateActivityDescriptionComponent, {
      width: '1000px',
      maxHeight: '80vh',

      autoFocus: false,
    });
  }
  activityDescriptionUpdate(account: any) {
    this.matDialog.open(UpdateActivityDescriptionComponent, {
      width: '1000px',
      maxHeight: '80vh',
      data: account,
      autoFocus: false,
    });
  }
  activityDescriptionDelete(account: any) {
    if (confirm('Are you sure?')) {
      alert('Deleted');
    }
  }
}
