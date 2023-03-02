import { GlobalComponent } from './../../../Global-Component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-add-commodity-printer',
  templateUrl: './add-commodity-printer.component.html',
  styleUrls: ['./add-commodity-printer.component.css'],
})
export class AddCommodityPrinterComponent implements OnInit {
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    public iHeaderSvc: IheaderService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddCommodityPrinterComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer: 11,
      Plant: '002',
      Commodity: 'DLRPACKIT',
      Type: '',
      Program: '',
      Printer: '',
      Copies: '',
      LabelName: '',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
  addCommodityPrinter() {}
}
