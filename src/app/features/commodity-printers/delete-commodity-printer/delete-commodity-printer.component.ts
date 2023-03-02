import { GlobalComponent } from './../../../Global-Component';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-delete-commodity-printer',
  templateUrl: './delete-commodity-printer.component.html',
  styleUrls: ['./delete-commodity-printer.component.css'],
})
export class DeleteCommodityPrinterComponent implements OnInit {
  storer: any;
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    public iHeaderSvc: IheaderService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteCommodityPrinterComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer: '',
      Plant: '',
      Commodity: '',
      Type: '',
      Program: '',
      Printer: '',
      Copies: '',
      LabelName: '',
    });
  }

  closeDialog() {
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  backCommodity() {}
  deletePrinter() {}
}
