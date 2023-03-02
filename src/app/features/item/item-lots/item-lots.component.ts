import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-item-lots',
  templateUrl: './item-lots.component.html',
  styleUrls: ['./item-lots.component.css'],
})
export class ItemLotsComponent implements OnInit {
  displayedColumns: string[] = [
    'Sts',
    'LotCodes',
    'LotUnitWeight',
    'FirstReceived',
    'LastShipped',
  ];

  form = this.fb.group({
    storer: 13,
    item: 'CPBKLT1 SAMPLE DSP1 BOOKLET',
    lots: [null],
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
  user = 'NKOHAN';
  building = 13;
  TallyHeaders: any = [];
  duplicateSource = [];
  id: any;
  postingDate: any;
  result: any;
  dataSource: any;

  workHeaders: any = [];

  posting() {
    this.id = this.activeRouter.snapshot.params['id'];
    console.log('tally Number ::' + this.id);

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

  itemLots() {
    console.log('Lots');
  }
}
