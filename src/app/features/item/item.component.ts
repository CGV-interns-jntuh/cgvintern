import { ItemBalancesComponent } from './item-balances/item-balances.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { CommentsComponent } from './../tallys/comments/comments.component';
import { ItemLotsComponent } from './item-lots/item-lots.component';
import { CrossRefItemComponent } from './cross-ref-item/cross-ref-item.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ItemLocationsComponent } from './item-locations/item-locations.component';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  displayedColumns: string[] = [
    'AD',
    'ItemCode',
    'Description',
    'Lot',
    'Bld',
    'UPC',
    'Tail',
    'Actions',
  ];
  dataSource: any = [];
  duplicateSource: any = [
    {
      AD: '',
      ItemCode: 'CPBKLT1',
      Description: 'SAMPLE DSP1 BOOKLET',
      Lot: 'N',
      Bld: 13,
      UPC: '',
      Tail: '',
    },
    {
      AD: '',
      ItemCode: 'CPBKLT2',
      Description: 'SAMPLE DSP2 BOOKLET',
      Lot: 'N',
      Bld: 13,
      UPC: '',
      Tail: '',
    },
  ];

  form!: FormGroup;
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    private activeRouter: ActivatedRoute,
    public iHeaderSvc: IheaderService,
    private router: Router,
    private matDialog: MatDialog,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      storer: 13,
      itemCode: '',
      description: '',
      product: '',
      onlyActive: 'Y',
      inventory: '',
    });
    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  itemCreate() {
    this.matDialog.open(CreateItemComponent, {
      width: '1000px',
      maxHeight: '80vh',

      // "data": storer,
      autoFocus: false,
    });
  }

  itemUpdate(element: any) {
    this.matDialog.open(UpdateItemComponent, {
      width: '1000px',
      maxHeight: '80vh',

      data: element,
      autoFocus: false,
    });
  }

  itemDelete(element: any) {
    this.matDialog.open(DeleteItemComponent, {
      width: '1000px',
      maxHeight: '80vh',
      data: element,
      autoFocus: false,
    });
  }

  itemCrossRef(element: any) {
    this.matDialog.open(CrossRefItemComponent, {
      width: '1000px',
      maxHeight: '80vh',
      data: element,
      autoFocus: false,
    });
  }

  itemLots(element: any) {
    this.matDialog.open(ItemLotsComponent, {
      width: '1000px',
      maxHeight: '80vh',
      data: element,
      autoFocus: false,
    });
  }
  itemComment(element: any) {
    this.matDialog.open(ItemCommentsComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }
  
  itemBalance(element: any) {
    this.matDialog.open(ItemBalancesComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }

  itemAdjustment(element: any) {

    this.router.navigate(['/main-nav/item/adjustment']);
    // this.matDialog.open(ItemBalancesComponent, {
    //   width: '1000px',
    //   maxHeight: '80vh',
    //   autoFocus: false,
    // });
  }

  itemInventoryAdjustment(element: any) {

    this.router.navigate(['/main-nav/item/inventory-adjustment']);
    // this.matDialog.open(ItemBalancesComponent, {
    //   width: '1000px',
    //   maxHeight: '80vh',
    //   autoFocus: false,
    // });
  }

  itemTally(element: any) {

    this.router.navigate(['/main-nav/item/tally', { state: element }]);
    // this.matDialog.open(ItemBalancesComponent, {
    //   width: '1000px',
    //   maxHeight: '80vh',
    //   autoFocus: false,
    // });
  }

  itemLocation(element: any) {
    this.matDialog.open(ItemLocationsComponent, {
      width: '1200px',
      maxHeight: '95vh',
      data: element,
      autoFocus: false,
    });
  }
}
