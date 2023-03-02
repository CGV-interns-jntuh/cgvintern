import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailsCreateComponent } from './order-details/order-details-create/order-details-create.component';
import { OrderDetailEditComponent } from './order-details/order-detail-edit/order-detail-edit.component';
import { OrderDetailStockStatusComponent } from './order-details/order-detail-stock-status/order-detail-stock-status.component';
import { OrderDetailItemStatusComponent } from './order-details/order-detail-item-status/order-detail-item-status.component';
import { OrderDetailStackActivityComponent } from './order-details/order-detail-stack-activity/order-detail-stack-activity.component';
import { OrderDetailChangeShipFromComponent } from './order-details/order-detail-change-ship-from/order-detail-change-ship-from.component';
import { OrderDetailSplitLineComponent } from './order-details/order-detail-split-line/order-detail-split-line.component';
import { OrderDetailCrossDocRefComponent } from './order-details/order-detail-cross-doc-ref/order-detail-cross-doc-ref.component';
import { OrderDetailCommentsComponent } from './order-details/order-detail-comments/order-detail-comments.component';
import { OrderDetailCutComponent } from './order-details/order-detail-cut/order-detail-cut.component';
import { OrderDetailChangeEventComponent } from './order-details/order-detail-change-event/order-detail-change-event.component';
import { OrderChangeLocLotComponent } from './order-details/order-change-loc-lot/order-change-loc-lot.component';
import { OrderDetailLotStatusComponent } from './order-details/order-detail-lot-status/order-detail-lot-status.component';
import { OrderDetailDeleteComponent } from './order-details/order-detail-delete/order-detail-delete.component';
import { OrderDetailUcc128MaintComponent } from './order-details/order-detail-ucc128-maint/order-detail-ucc128-maint.component';
import { OrderDetailMoveQueueComponent } from './order-details/order-detail-move-queue/order-detail-move-queue.component';




@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
