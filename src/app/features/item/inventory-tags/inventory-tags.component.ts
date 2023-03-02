import { CountSummaryInventoryTagsComponent } from './count-summary-inventory-tags/count-summary-inventory-tags.component';
import { ControlGroupsInventoryTagsComponent } from './control-groups-inventory-tags/control-groups-inventory-tags.component';
import { DiscrepanciesInventoryTagsComponent } from './discrepancies-inventory-tags/discrepancies-inventory-tags.component';
import { TagsInventoryComponent } from './tags-inventory/tags-inventory.component';
import { ListInventoryTagsComponent } from './list-inventory-tags/list-inventory-tags.component';
import { ChangeInventoryTagsComponent } from './change-inventory-tags/change-inventory-tags.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
//import { IheaderService } from '../tallys/iheader.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { IheaderService } from '../../tallys/iheader.service';
@Component({
  selector: 'app-inventory-tags',
  templateUrl: './inventory-tags.component.html',
  styleUrls: ['./inventory-tags.component.css'],
})
export class InventoryTagsComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'BookName',
    'ExtractDate',
    'Description',
    'Sts',
    'Actions',
  ];
  dataSource: any = [];

  duplicateSource: any = [
    {
      BookName: 'JOHNTEST01',
      ExtractDate: '12/06/2019',
      Description: 'Extract of Storer 0100 on 12/06/2019',
      Sts: 'BK',
    },
    {
      BookName: 'JWKTEST',
      ExtractDate: '09/24/2019',
      Description: 'Extract of Storer 0100 on 09/24/2019',
      Sts: 'BK',
    },
  ];

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Book: '',
    });

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  inventoryTagsChange() {
    this.matDialog.open(ChangeInventoryTagsComponent, {
      width: '5000px',
      maxHeight: '90vh',
      // 'data': element,
      autoFocus: false,
    });
  }
  inventoryTagsList() {
    this.matDialog.open(ListInventoryTagsComponent, {
      width: '5000px',
      maxHeight: '90vh',
      // 'data': element,
      autoFocus: false,
    });
  }

  inventoryTagsTag() {
    this.matDialog.open(TagsInventoryComponent, {
      width: '5000px',
      maxHeight: '90vh',
      // 'data': element,
      autoFocus: false,
    });
  }

  inventoryTagsDiscrepancies() {
    this.matDialog.open(DiscrepanciesInventoryTagsComponent, {
      width: '5000px',
      maxHeight: '90vh',
      // 'data': element,
      autoFocus: false,
    });
  }
  inventoryTagsControlGroups() {
    this.matDialog.open(ControlGroupsInventoryTagsComponent, {
      width: '5000px',
      maxHeight: '90vh',
      // 'data': element,
      autoFocus: false,
    });
  }
  inventoryTagsCountSummary() {
    this.matDialog.open(CountSummaryInventoryTagsComponent, {
      width: '5000px',
      maxHeight: '90vh',
      // 'data': element,
      autoFocus: false,
    });
  }
  inventoryBookDetails() {
    this.matDialog.open(BookDetailsComponent, {
      width: '5000px',
      maxHeight: '90vh',
      // 'data': element,
      autoFocus: false,
    });
  }
}
