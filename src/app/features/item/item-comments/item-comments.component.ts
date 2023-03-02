import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.css'],
})
export class ItemCommentsComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Key', 'Tp', 'Seq', 'Comment'];

  form = this.fb.group({
    fileID: 'IT',
    Key: '0013 CPBKLT1',
    subType: [null],
  });

  constructor(
    private activeRouter: ActivatedRoute,
    public iHeaderSvc: IheaderService,
    private router: Router,
    private matDialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ItemCommentsComponent>
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
