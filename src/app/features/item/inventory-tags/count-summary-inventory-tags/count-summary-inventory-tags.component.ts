import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';
//import { IheaderService } from '../../tallys/iheader.service';
import { TagsInventoryComponent } from '../tags-inventory/tags-inventory.component';

@Component({
  selector: 'app-count-summary-inventory-tags',
  templateUrl: './count-summary-inventory-tags.component.html',
  styleUrls: ['./count-summary-inventory-tags.component.css'],
})
export class CountSummaryInventoryTagsComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['Team', 'Tags', 'Quantity', 'Pct'];
  dataSource: any = [];

  duplicateSource: any = [
    {
      Team: '',
      Tags: '',
      Quantity: '',
      Pct: '',
    },
  ];

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<TagsInventoryComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      TagsProduced: '',
      Voids: '',
      Unused: '',
    });

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
