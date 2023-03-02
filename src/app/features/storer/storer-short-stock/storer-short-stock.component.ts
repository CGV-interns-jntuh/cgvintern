import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';
@Component({
  selector: 'app-storer-short-stock',
  templateUrl: './storer-short-stock.component.html',
  styleUrls: ['./storer-short-stock.component.css'],
})
export class StorerShortStockComponent implements OnInit {
  displayedColumns: string[] = [
    'Item/Description',
    'Commit',
    'Alloc',
    'InTrans',
    'Avail',
    'date',
  ];

  updateForm = this.fb.group({
    // storer: [
    //   '',
    //   [
    //     Validators.required,
    //     Validators.min(0),
    //     Validators.pattern('[0-9]{1,10}'),
    //   ],
    // ],
    storer: 11,
    item: [null],
    showneg: [null],
  });

  result: any = [];
  dataSource = [];
  duplicateSource = [];
  documents = [];
  user = GlobalComponent.user;
  building = GlobalComponent.building;
  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}
  TallyHeaders: any = [];
  id: number = 0;
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
}
