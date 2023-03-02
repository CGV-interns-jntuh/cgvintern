import { UpdateCommodityPrinterComponent } from './update-commodity-printer/update-commodity-printer.component';
import { DeleteCommodityPrinterComponent } from './delete-commodity-printer/delete-commodity-printer.component';
import { AddCommodityPrinterComponent } from './add-commodity-printer/add-commodity-printer.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';

@Component({
  selector: 'app-commodity-printers',
  templateUrl: './commodity-printers.component.html',
  styleUrls: ['./commodity-printers.component.css'],
})
export class CommodityPrintersComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Storer',
    'Commodity',
    'Plant',
    'Type',
    'Program',
    'Printer',
    'Actions',
  ];

  dataSource: any = [];

  duplicateSource: any = [
    {
      Storer: 11,
      Commodity: 'DLRPACKIT',
      Plant: '002',
      Type: 'LABEL',
      Program: 'C1W01R',
      Printer: 'PRINTER',
    },
  ];

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog // @Inject(MAT_DIALOG_DATA) public anyvariable: any, // private dialogRef: MatDialogRef<AttributesComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer: 11,
      Commodity: 'DLRPACKIT',
      Plant: '002',
      Type: '',
    });

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {}

  addPrinter() {
    this.matDialog.open(AddCommodityPrinterComponent, {
      width: '1000px',
      maxHeight: '90vh',
      autoFocus: false,
    });
  }
  deletePrinter(element: any) {
    this.matDialog.open(DeleteCommodityPrinterComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data: element,
      autoFocus: false,
    });
  }
  updatePrinter(element: any) {
    this.matDialog.open(UpdateCommodityPrinterComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data: element,
      autoFocus: false,
    });
  }
}
