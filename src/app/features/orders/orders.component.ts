import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { OrderCommentsComponent } from './order-comments/order-comments.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderDeleteComponent } from './order-delete/order-delete.component';
import { OrderDshipComponent } from './order-dship/order-dship.component';
import { OrderEventHistoryComponent } from './order-event-history/order-event-history.component';
import { OrderMoveHistoryInquiryComponent } from './order-move-history-inquiry/order-move-history-inquiry.component';
import { OrderSendtoMoveQueueComponent } from './order-sendto-move-queue/order-sendto-move-queue.component';
import { OrderShipConfirmComponent } from './order-ship-confirm/order-ship-confirm.component';
import { OrderUpdateComponent } from './order-update/order-update.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Sts',
    'OrderNumber',
    'OT',
    'StorerNumber',
    'ShpTyp',
    'SchedShip',
    'ActualShip',
    'StorerReference',
    'Actions',

  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Sts:'BL',
      OrderNumber:'123455238',
      OT:'S',
      StorerNumber:'9500',
      ShpTyp:'01',
      SchedShip:'11/04/22',
      ActualShip:'',
      StorerReference:'TEST PACKING SLIP SQUISH',
      
  
    },
    {
      Sts:'PS',
      OrderNumber:'123455238',
      OT:'S',
      StorerNumber:'774',
      ShpTyp:'02',
      SchedShip:'11/02/22',
      ActualShip:'',
      StorerReference:'MQEOD TESTING',
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
     BillNo:'',
     RefNo:'',
     P_O_NO:'',
     PRONo:'',
     Consignee:'',
     Carrier:'',
     shipDates:'',
     status:'',
     Bldg:'',
     Storer:'',
     Open_All:'O',
     Trk:'',
     Broker:'',


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }

  OrdersUpdateForm(element:any){
    this.matDialog.open(OrderUpdateComponent, {
      "width": '5000px',
      "maxHeight": '90vh',
      "data":element,
      "autoFocus": false
    });

  }

  OrdersDeleteForm(element:any){
    this.matDialog.open(OrderDeleteComponent, {
      "width": '5000px',
      "maxHeight": '90vh',
      "data":element,
      "autoFocus": false


    });
  }

  OrderEventHistory(element:any){
    this.matDialog.open(OrderEventHistoryComponent, {
      "width": '5000px',
      "maxHeight": '90vh',
      "data":element,
      "autoFocus": false


    });
  }

  orderDship(element:any){
    this.matDialog.open(OrderDshipComponent, {
      "width": '5000px',
      "maxHeight": '130vh',
      "data":element,
      "autoFocus": false


    });
  }

 OrderSendToMoveQueue(element:any){
    this.matDialog.open(OrderSendtoMoveQueueComponent, {
      "width": '1000px',
      "maxHeight": '130vh',
      "data":element,
      "autoFocus": false


    });
  }

  OrderMoveToHistoryInquiry(element:any){
    this.matDialog.open(OrderMoveHistoryInquiryComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "data":element,
      "autoFocus": false


    });
  }

  OrderComments(element:any){
    this.matDialog.open(OrderCommentsComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "data":element,
      "autoFocus": false


    });
  }

  orderShipConfirm(element:any){
    this.matDialog.open(OrderShipConfirmComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "data":element,
      "autoFocus": false


    });
  }

  addOrder(){
    //this.router.navigate(['orders/read']);
    this.matDialog.open(OrderCreateComponent, {
      "width": '1000px',
      "maxHeight": '130vh',
      "autoFocus": false
    });
    
  }

  orderDetails(element:any){
    this.router.navigate(['/main-nav/orders/details']);
    // this.matDialog.open(OrderCreateComponent, {
    //   "width": '1000px',
    //   "maxHeight": '130vh',
    //   "autoFocus": false
    // });
    
  }


}
