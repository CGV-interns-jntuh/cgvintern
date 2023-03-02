import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { OrderChangeLocLotComponent } from './order-change-loc-lot/order-change-loc-lot.component';
import { OrderDetailChangeEventComponent } from './order-detail-change-event/order-detail-change-event.component';
import { OrderDetailChangeShipFromComponent } from './order-detail-change-ship-from/order-detail-change-ship-from.component';
import { OrderDetailCommentsComponent } from './order-detail-comments/order-detail-comments.component';
import { OrderDetailCrossDocRefComponent } from './order-detail-cross-doc-ref/order-detail-cross-doc-ref.component';
import { OrderDetailCutComponent } from './order-detail-cut/order-detail-cut.component';
import { OrderDetailDeleteComponent } from './order-detail-delete/order-detail-delete.component';
import { OrderDetailEditComponent } from './order-detail-edit/order-detail-edit.component';
import { OrderDetailItemStatusComponent } from './order-detail-item-status/order-detail-item-status.component';
import { OrderDetailLotStatusComponent } from './order-detail-lot-status/order-detail-lot-status.component';
import { OrderDetailMoveQueueComponent } from './order-detail-move-queue/order-detail-move-queue.component';
import { OrderDetailSplitLineComponent } from './order-detail-split-line/order-detail-split-line.component';
import { OrderDetailStackActivityComponent } from './order-detail-stack-activity/order-detail-stack-activity.component';
import { OrderDetailStockStatusComponent } from './order-detail-stock-status/order-detail-stock-status.component';
import { OrderDetailUcc128MaintComponent } from './order-detail-ucc128-maint/order-detail-ucc128-maint.component';
import { OrderDetailsCreateComponent } from './order-details-create/order-details-create.component';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Quantity',
    'Item',
    'Code/Description',
    'Weight',
    'Ovr',
    'Status',
    'Opt',
  

  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
    Quantity:5,
    Item:1234,
    CodeDescription:'Item Code 1',
    Weight:51,
    Ovr:'N',
    Status:'CM',
    Opt:'',
  
    },
    {  
     Quantity:5,
    Item:1234,
    CodeDescription:'Item Code 1',
    Weight:51,
    Ovr:'N',
    Status:'CM',
    Opt:'',
    }
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Bill_of_Lading:'123455239',
    Storer:'9500 Krissy s Item Storer',
    total_Quantitry:25,
    Consignee:'TEST test1',


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/orders/read']);
  }

  addOrderDetail(){
    //this.router.navigate(['orders/read']);
    this.matDialog.open(OrderDetailsCreateComponent, {
      "width": '1000px',
      "maxHeight": '130vh',
      "autoFocus": false
    });

    
    
  }

  orderDetailEdit(order:any){
    //this.router.navigate(['orders/read']);
    this.matDialog.open(OrderDetailEditComponent, {
      "width": '1000px',
      "maxHeight": '130vh',
      "autoFocus": false
    });
}

orderDetailStackStatus(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailStockStatusComponent, {
    "width": '1000px',
    "maxHeight": '130vh',
    "autoFocus": false
  });
}

orderDetailItemtatus(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailItemStatusComponent, {
    "width": '1000px',
    "maxHeight": '130vh',
    "autoFocus": false
  });
}

orderDetailIStockActivity(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailStackActivityComponent, {
    "width": '1000px',
    "maxHeight": '130vh',
    "autoFocus": false
  });
}

orderDetailChnageShipFrom(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailChangeShipFromComponent, {
    "width": '1000px',
    "maxHeight": '130vh',
    "autoFocus": false
  });
}

orderDetailSplitLine(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailSplitLineComponent, {
    "width": '1000px',
    "maxHeight": '130vh',
    "autoFocus": false
  });
}

orderDetailCrossDocRef(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailCrossDocRefComponent, {
    "width": '1000px',
    "maxHeight": '130vh',
    "autoFocus": false
  });
}

orderDetailComments(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailCommentsComponent, {
    "width": '1000px',
    "maxHeight": '80vh',
    "autoFocus": false
  });
}

orderDetailCut(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailCutComponent, {
    "width": '1000px',
    "maxHeight": '80vh',
    "autoFocus": false
  });
}

orderDetailChangeEvent(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailChangeEventComponent, {
    "width": '1000px',
    "maxHeight": '80vh',
    "autoFocus": false
  });
}

orderChangeLocLot(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderChangeLocLotComponent, {
    "width": '1000px',
    "maxHeight": '80vh',
    "autoFocus": false
  });
}

orderDetailLotStatus(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailLotStatusComponent, {
    "width": '1000px',
    "maxHeight": '80vh',
    "autoFocus": false
  });
}

orderDetailUcc128Maint(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailUcc128MaintComponent, {
    "width": '1000px',
    "maxHeight": '80vh',
    "autoFocus": false
  });
}

orderDetailMoveQueue(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailMoveQueueComponent, {
    "width": '1000px',
    "maxHeight": '80vh',
    "autoFocus": false
  });
}

orderDetailDelete(order:any){
  //this.router.navigate(['orders/read']);
  this.matDialog.open(OrderDetailDeleteComponent, {
    "width": '1000px',
    "maxHeight": '80vh',
    "autoFocus": false
  });
}



}
