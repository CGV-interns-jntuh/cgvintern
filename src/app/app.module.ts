import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Material Modules */
import { MatPaginatorModule } from '@angular/material/paginator';
//import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MainNavComponent } from './main-nav/main-nav.component';

/* Feature Modules */
import { ReceiveModule } from './features/receive/receive.module';
import { TallysModule } from './features/tallys/tallys.module';
import { OrdersModule } from './features/orders/orders.module';
import { ShippingModule } from './features/shipping/shipping.module';
import { AuthModule } from './features/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StorerComponent } from './features/storer/storer.component';
import { StorerCreateComponent } from './features/storer/storer-create/storer-create.component';
import { StorerUpdateComponent } from './features/storer/storer-update/storer-update.component';
import { StorerDeactiveComponent } from './features/storer/storer-deactive/storer-deactive.component';
import { BuildingsModule } from './features/buildings/buildings.module';
import { StorerContactsComponent } from './features/storer/storer-contacts/storer-contacts.component';
import { StorerContactCreateComponent } from './features/storer/storer-contacts/storer-contact-create/storer-contact-create.component';
import { StorerContactUpdateComponent } from './features/storer/storer-contacts/storer-contact-update/storer-contact-update.component';
import { StorerContactDeleteComponent } from './features/storer/storer-contacts/storer-contact-delete/storer-contact-delete.component';
import { SroterPeriodRecordsComponent } from './features/storer/storer-period-records/sroter-period-records.component';
import { SroterWriteBalanceRecordComponent } from './features/storer/storer-write-balance-record/sroter-write-balance-record.component';
import { MapLocationComponent } from './features/map-location/map-location.component';
import { MapLocationCreateComponent } from './features/map-location/map-location-create/map-location-create.component';
import { MapLocationUpdateComponent } from './features/map-location/map-location-update/map-location-update.component';
import { MapLocationDeleteComponent } from './features/map-location/map-location-delete/map-location-delete.component';
import { MapZonesComponent } from './features/map-zones/map-zones.component';
import { CreateMapzoneComponent } from './features/map-zones/create-mapzone/create-mapzone.component';
import { UpdateMapzoneComponent } from './features/map-zones/update-mapzone/update-mapzone.component';
import { DeleteMapzoneComponent } from './features/map-zones/delete-mapzone/delete-mapzone.component';

import { LocationStatusInquiryComponent } from './features/map-location/location-status-inquiry/location-status-inquiry.component';

import { ConsigneeComponent } from './features/consignee/consignee.component';
import { ConsigneeCreateComponent } from './features/consignee/consignee-create/consignee-create.component';
import { ConsigneeUpdateComponent } from './features/consignee/consignee-update/consignee-update.component';
import { ConsigneeDeleteComponent } from './features/consignee/consignee-delete/consignee-delete.component';
import { ConsigneeXrefComponent } from './features/consignee/consignee-xref/consignee-xref.component';
import { ExitPointsComponent } from './features/exit-points/exit-points.component';
import { ExitPointsCreateComponent } from './features/exit-points/exit-points-create/exit-points-create.component';
import { ExitPointsUpdateComponent } from './features/exit-points/exit-points-update/exit-points-update.component';
import { ExitPointsDeleteComponent } from './features/exit-points/exit-points-delete/exit-points-delete.component';

import { CarriersComponent } from './features/carriers/carriers.component';
import { CreateCarriersComponent } from './features/carriers/create-carriers/create-carriers.component';
import { UpdateCarriersComponent } from './features/carriers/update-carriers/update-carriers.component';
import { DeleteCarriersComponent } from './features/carriers/delete-carriers/delete-carriers.component';
import { ConsineeCommentsComponent } from './features/consignee/consinee-comments/consinee-comments.component';
import { OrdersComponent } from './features/orders/orders.component';
import { OrderCreateComponent } from './features/orders/order-create/order-create.component';
import { OrderUpdateComponent } from './features/orders/order-update/order-update.component';
import { OrderDeleteComponent } from './features/orders/order-delete/order-delete.component';
import { OrderEventHistoryComponent } from './features/orders/order-event-history/order-event-history.component';
import { OrderDshipComponent } from './features/orders/order-dship/order-dship.component';
import { OrderSendtoMoveQueueComponent } from './features/orders/order-sendto-move-queue/order-sendto-move-queue.component';
import { OrderMoveHistoryInquiryComponent } from './features/orders/order-move-history-inquiry/order-move-history-inquiry.component';
import { MoveQueueComponent } from './features/move-queue/move-queue.component';
import { OrderCommentsComponent } from './features/orders/order-comments/order-comments.component';
import { OrderShipConfirmComponent } from './features/orders/order-ship-confirm/order-ship-confirm.component';
import { MoveQueueChangeComponent } from './features/move-queue/move-queue-change/move-queue-change.component';
import { MoveQueueCompleteComponent } from './features/move-queue/move-queue-complete/move-queue-complete.component';
import { MoveQueueEntryAssignComponent } from './features/move-queue/move-queue-entry-assign/move-queue-entry-assign.component';
import { MoveQueueEntryInquiryComponent } from './features/move-queue/move-queue-entry-inquiry/move-queue-entry-inquiry.component';
import { MoveChangeStagingLocationComponent } from './features/move-queue/move-change-staging-location/move-change-staging-location.component';
import { MoveQueueNoPickComponent } from './features/move-queue/move-queue-no-pick/move-queue-no-pick.component';
import { MoveChangeQueuePriorityComponent } from './features/move-queue/move-change-queue-priority/move-change-queue-priority.component';
import { ItemComponent } from './features/item/item.component';
import { CreateItemComponent } from './features/item/create-item/create-item.component';
import { UpdateItemComponent } from './features/item/update-item/update-item.component';
import { DeleteItemComponent } from './features/item/delete-item/delete-item.component';
import { CrossRefItemComponent } from './features/item/cross-ref-item/cross-ref-item.component';
import { ItemLotsComponent } from './features/item/item-lots/item-lots.component';
import { ItemCommentsComponent } from './features/item/item-comments/item-comments.component';
import { ItemBalancesComponent } from './features/item/item-balances/item-balances.component';
import { ItemTallyWorkWithComponent } from './features/item/item-tally-work-with/item-tally-work-with.component';
import { ItemTallyInquiryComponent } from './features/item/item-tally-work-with/item-tally-inquiry/item-tally-inquiry.component';
import { ItemAdjustmentWorkWithComponent } from './features/item/item-adjustment-work-with/item-adjustment-work-with.component';
import { ItemAdjustmentInquiryComponent } from './features/item/item-adjustment-work-with/item-adjustment-inquiry/item-adjustment-inquiry.component';
import { ItemAdjustmentDeleteComponent } from './features/item/item-adjustment-work-with/item-adjustment-delete/item-adjustment-delete.component';
import { ItemRebalancesComponent } from './features/item/item-rebalances/item-rebalances.component';
import { ItemLocationsComponent } from './features/item/item-locations/item-locations.component';
import { CreateitemLocationComponent } from './features/item/item-locations/createitem-location/createitem-location.component';
import { DeleteitemlocationComponent } from './features/item/item-locations/deleteitemlocation/deleteitemlocation.component';
import { SideAdjustmentComponent } from './features/item/item-locations/side-adjustment/side-adjustment.component';
import { OrderDetailsComponent } from './features/orders/order-details/order-details.component';
import { OrderDetailsCreateComponent } from './features/orders/order-details/order-details-create/order-details-create.component';
import { OrderDetailEditComponent } from './features/orders/order-details/order-detail-edit/order-detail-edit.component';
import { OrderDetailStockStatusComponent } from './features/orders/order-details/order-detail-stock-status/order-detail-stock-status.component';
import { OrderDetailItemStatusComponent } from './features/orders/order-details/order-detail-item-status/order-detail-item-status.component';
import { OrderDetailStackActivityComponent } from './features/orders/order-details/order-detail-stack-activity/order-detail-stack-activity.component';
import { TwoSideAdjustmentComponent } from './features/item/item-locations/two-side-adjustment/two-side-adjustment.component';
import { ReSequenceComponent } from './features/item/item-locations/re-sequence/re-sequence.component';
import { OrderDetailChangeShipFromComponent } from './features/orders/order-details/order-detail-change-ship-from/order-detail-change-ship-from.component';
import { OrderDetailSplitLineComponent } from './features/orders/order-details/order-detail-split-line/order-detail-split-line.component';
import { OrderDetailCrossDocRefComponent } from './features/orders/order-details/order-detail-cross-doc-ref/order-detail-cross-doc-ref.component';
import { OrderDetailCommentsComponent } from './features/orders/order-details/order-detail-comments/order-detail-comments.component';
import { OrderDetailCutComponent } from './features/orders/order-details/order-detail-cut/order-detail-cut.component';
import { OrderDetailChangeEventComponent } from './features/orders/order-details/order-detail-change-event/order-detail-change-event.component';
import { OrderChangeLocLotComponent } from './features/orders/order-details/order-change-loc-lot/order-change-loc-lot.component';
import { OrderDetailLotStatusComponent } from './features/orders/order-details/order-detail-lot-status/order-detail-lot-status.component';
import { OrderDetailDeleteComponent } from './features/orders/order-details/order-detail-delete/order-detail-delete.component';
import { StorerAccessInvoiceEnquiryComponent } from './features/storer/storer-access-invoice-enquiry/storer-access-invoice-enquiry.component';
import { StorerArAgingInquiryComponent } from './features/storer/storer-ar-aging-inquiry/storer-ar-aging-inquiry.component';
import { StorerRecIvcInquiryComponent } from './features/storer/storer-rec-ivc-inquiry/storer-rec-ivc-inquiry.component';
import { StorerEdiDocumentsComponent } from './features/storer/storer-edi-documents/storer-edi-documents.component';
import { StorerConsItemComponent } from './features/storer/storer-cons-item/storer-cons-item.component';
import { StorerUccSerCtlComponent } from './features/storer/storer-ucc-ser-ctl/storer-ucc-ser-ctl.component';
import { StorerUccLblCtlComponent } from './features/storer/storer-ucc-lbl-ctl/storer-ucc-lbl-ctl.component';
import { StorerPrintersComponent } from './features/storer/storer-printers/storer-printers.component';
import { StorerRatesBasesComponent } from './features/storer/storer-rates-bases/storer-rates-bases.component';
import { OrderDetailUcc128MaintComponent } from './features/orders/order-details/order-detail-ucc128-maint/order-detail-ucc128-maint.component';
import { OrderDetailMoveQueueComponent } from './features/orders/order-details/order-detail-move-queue/order-detail-move-queue.component';
import { StorerChangeRatesComponent } from './features/storer/storer-change-rates/storer-change-rates.component';
import { StorerGen869TriggerComponent } from './features/storer/storer-gen869-trigger/storer-gen869-trigger.component';
import { StorerReasonablenessComponent } from './features/storer/storer-reasonableness/storer-reasonableness.component';
import { StorerEdiInfoComponent } from './features/storer/storer-edi-info/storer-edi-info.component';
import { StorerItemDefaultsComponent } from './features/storer/storer-item-defaults/storer-item-defaults.component';
import { StorerWorkWithErrorsComponent } from './features/storer/storer-work-with-errors/storer-work-with-errors.component';

import { StorerExportComponent } from './features/storer/storer-export/storer-export.component';
import { StorerAttributesComponent } from './features/storer/storer-attributes/storer-attributes.component';
import { StorerInvoiceInquiryComponent } from './features/storer/storer-invoice-inquiry/storage-invoice-inquiry.component';
import { StorerAccountStatusComponent } from './features/storer/storer-account-status/storer-account-status.component';
import { StorerAccountAttributesComponent } from './features/storer/storer-account-attributes/storer-account-attributes.component';
import { StorerXrefComponent } from './features/storer/storer-xref/storer-xref.component';
import { StorerAcctAttributeComponent } from './features/storer/storer-acct-attribute/storer-acct-attribute.component';
import { StorerCommentsComponent } from './features/storer/storer-comments/storer-comments.component';
import { StorerExpNoActivityComponent } from './features/storer/storer-exp-no-activity/storer-exp-no-activity.component';
import { StorerProductCodesComponent } from './features/storer/storer-product-codes/storer-product-codes.component';
import { StorerAutoRatesComponent } from './features/storer/storer-auto-rates/storer-auto-rates.component';
import { StorerPutawaySchemeComponent } from './features/storer/storer-putaway-scheme/storer-putaway-scheme.component';
import { StorerWwAccountAttributesComponent } from './features/storer/storer-ww-account-attributes/storer-ww-account-attributes.component';
import { StorerAddAccountAttributeComponent } from './features/storer/storer-ww-account-attributes/storer-add-account-attribute/storer-add-account-attribute.component';
import { StorerEditAccountAttributeComponent } from './features/storer/storer-ww-account-attributes/storer-edit-account-attribute/storer-edit-account-attribute.component';
import { StorerDailyStatusComponent } from './features/storer/storer-daily-status/storer-daily-status.component';
import { StorerShortStockComponent } from './features/storer/storer-short-stock/storer-short-stock.component';
import { PostalAbbreviationsComponent } from './features/postal-abbreviations/postal-abbreviations.component';
import { PostalAbbreviationsAddComponent } from './features/postal-abbreviations/postal-abbreviations-add/postal-abbreviations-add.component';
import { PostalAbbreviationsChangeComponent } from './features/postal-abbreviations/postal-abbreviations-change/postal-abbreviations-change.component';
import { PostalAbbreviationsDeleteComponent } from './features/postal-abbreviations/postal-abbreviations-delete/postal-abbreviations-delete.component';
import { ReceivablesComponent } from './features/receivables/receivables.component';
import { ReceivableAdjustInvoiceComponent } from './features/receivables/receivable-adjust-invoice/receivable-adjust-invoice.component';
import { ReceivableCreditInvoiceComponent } from './features/receivables/receivable-credit-invoice/receivable-credit-invoice.component';
import { ReceivableInquiryComponent } from './features/receivables/receivable-inquiry/receivable-inquiry.component';
import { ReceivableAdjustInquiryComponent } from './features/receivables/receivable-adjust-inquiry/receivable-adjust-inquiry.component';
import { ReceivableCommentsComponent } from './features/receivables/receivable-comments/receivable-comments.component';
import { LoginComponent } from './login/login.component';
import { StorageInvoiceInquiryComponent } from './features/storer/storage-invoice-inquiry/storage-invoice-inquiry.component';
import { StorerAutoSchedulingProceesComponent } from './features/storer/storer-auto-scheduling-procees/storer-auto-scheduling-procees.component';
import { StorerAutoSchedulingProceesUpdateComponent } from './features/storer/storer-auto-scheduling-procees/storer-auto-scheduling-procees-update/storer-auto-scheduling-procees-update.component';
import { StorerAutoSchedulingProceesAddComponent } from './features/storer/storer-auto-scheduling-procees/storer-auto-scheduling-procees-add/storer-auto-scheduling-procees-add.component';
import { ReceivableDetailsComponent } from './features/receivables/receivable-details/receivable-details.component';
import { UpdateLedgerComponent } from './features/receivables/receivable-details/update-ledger/update-ledger.component';
import { AdjustmentInquiryComponent } from './features/receivables/receivable-details/adjustment-inquiry/adjustment-inquiry.component';
import { TransactionInquiryComponent } from './features/receivables/receivable-details/transaction-inquiry/transaction-inquiry.component';
import { StorerDeleteComponent } from './features/storer/storer-delete/storer-delete.component';
import { ActionRsmsComponent } from './features/action-rsms/action-rsms.component';
import { ActionRsmsAddComponent } from './features/action-rsms/action-rsms-add/action-rsms-add.component';
import { ActionRsmsChangeComponent } from './features/action-rsms/action-rsms-change/action-rsms-change.component';
import { StorerAutoScheduleProcresErrorComponent } from './features/storer/storer-auto-scheduling-procees/storer-auto-schedule-procres-error/storer-auto-schedule-procres-error.component';
import { ReceivablePrintComponent } from './features/receivables/receivable-print/receivable-print.component';
import { ApplicationsComponent } from './features/applications/applications.component';
import { ApplicationAddComponent } from './features/applications/application-add/application-add.component';
import { ApplicationChangeComponent } from './features/applications/application-change/application-change.component';
import { ApplicationModuleComponent } from './features/applications/application-module/application-module.component';
import { ControllBatchFileComponent } from './features/controll-batch-file/controll-batch-file.component';
import { ControllBatchFileCreateComponent } from './features/controll-batch-file/controll-batch-file-create/controll-batch-file-create.component';
import { ControllBatchFileEditComponent } from './features/controll-batch-file/controll-batch-file-edit/controll-batch-file-edit.component';
import { ControllBatchFileDeleteComponent } from './features/controll-batch-file/controll-batch-file-delete/controll-batch-file-delete.component';
import { ControllBatchFileConstraintsComponent } from './features/controll-batch-file/controll-batch-file-constraints/controll-batch-file-constraints.component';
import { AuditHeadersComponent } from './features/audit-headers/audit-headers.component';
import { AuditHeadersChangeComponent } from './features/audit-headers/audit-headers-change/audit-headers-change.component';
import { AuditHeadersCommentsComponent } from './features/audit-headers/audit-headers-comments/audit-headers-comments.component';
import { AuditHeadersStatusComponent } from './features/audit-headers/audit-headers-status/audit-headers-status.component';
import { ApplicationAuthoritiesComponent } from './features/applications/application-authorities/application-authorities.component';
import { BoxContentComponent } from './features/box-content/box-content.component';
import { BoxContentChangeComponent } from './features/box-content/box-content-change/box-content-change.component';
import { BoxContentDeactiveComponent } from './features/box-content/box-content-deactive/box-content-deactive.component';
import { BoxContentItemActivityComponent } from './features/box-content/box-content-item-activity/box-content-item-activity.component';
import { BoxContentItemLabelComponent } from './features/box-content/box-content-item-label/box-content-item-label.component';
import { BoxContentDeleteComponent } from './features/box-content/box-content-delete/box-content-delete.component';
import { BoxContentAddPressHoldComponent } from './features/box-content/box-content-add-press-hold/box-content-add-press-hold.component';
import { BoxContentRemovePressHoldComponent } from './features/box-content/box-content-remove-press-hold/box-content-remove-press-hold.component';
import { AccountProcessingComponent } from './features/account-processing/account-processing.component';
import { CreateAccountProcessingComponent } from './features/account-processing/create-account-processing/create-account-processing.component';
import { UpdateAccountProcessingComponent } from './features/account-processing/update-account-processing/update-account-processing.component';
import { DeleteAccountProcessingComponent } from './features/account-processing/delete-account-processing/delete-account-processing.component';
import { CopyWorkflowAccountProcessingComponent } from './features/account-processing/copy-workflow-account-processing/copy-workflow-account-processing.component';
import { ActivityDescriptionComponent } from './features/activity-description/activity-description.component';
import { CreateActivityDescriptionComponent } from './features/activity-description/create-activity-description/create-activity-description.component';
import { UpdateActivityDescriptionComponent } from './features/activity-description/update-activity-description/update-activity-description.component';
import { BoxContentEventHistoryInquiryComponent } from './features/box-content/box-content-event-history-inquiry/box-content-event-history-inquiry.component';
import { BoxContentInquiryComponent } from './features/box-content/box-content-inquiry/box-content-inquiry.component';
import { BalanceErrorsComponent } from './features/balance-errors/balance-errors.component';
import { BalanceErrorLotStatusComponent } from './features/balance-errors/balance-error-lot-status/balance-error-lot-status.component';
import { BalanceErrorItemStatusComponent } from './features/balance-errors/balance-error-item-status/balance-error-item-status.component';
import { BalanceErrorStkActInquiryComponent } from './features/balance-errors/balance-error-stk-act-inquiry/balance-error-stk-act-inquiry.component';
import { BalanceErrorsOrdersComponent } from './features/balance-errors/balance-errors-orders/balance-errors-orders.component';
import { BalanceErrorsAdjustmentsComponent } from './features/balance-errors/balance-errors-adjustments/balance-errors-adjustments.component';
import { BalanceErrorsBalancesComponent } from './features/balance-errors/balance-errors-balances/balance-errors-balances.component';
import { BalanceErrorsItemLocationsComponent } from './features/balance-errors/balance-errors-item-locations/balance-errors-item-locations.component';
import { BalanceErrorsItemReceiversComponent } from './features/balance-errors/balance-errors-item-receivers/balance-errors-item-receivers.component';
import { InventoryBooksComponent } from './features/inventory-books/inventory-books.component';
import { InventoryBooksMissingCountComponent } from './features/inventory-books/inventory-books-missing-count/inventory-books-missing-count.component';
import { InventoryBooksWorkSheetComponent } from './features/inventory-books/inventory-books-work-sheet/inventory-books-work-sheet.component';
import { InventoryBookSynopsysComponent } from './features/inventory-books/inventory-book-synopsys/inventory-book-synopsys.component';
import { InventoryBookToCountComponent } from './features/inventory-books/inventory-book-to-count/inventory-book-to-count.component';
import { InventoryBookCountListingComponent } from './features/inventory-books/inventory-book-count-listing/inventory-book-count-listing.component';
import { InventoryBookDeleteComponent } from './features/inventory-books/inventory-book-delete/inventory-book-delete.component';
import { InventoryBookReservePostComponent } from './features/inventory-books/inventory-book-reserve-post/inventory-book-reserve-post.component';
import { InventoryMaintainBookComponent } from './features/inventory-books/inventory-maintain-book/inventory-maintain-book.component';
import { InventoryEnterCountComponent } from './features/inventory-books/inventory-enter-count/inventory-enter-count.component';
import { InventoryLpBookToCountComponent } from './features/inventory-books/inventory-lp-book-to-count/inventory-lp-book-to-count.component';
import { AddressTypesComponent } from './features/address-types/address-types.component';
import { AddressTypeChangeComponent } from './features/address-types/address-type-change/address-type-change.component';
import { AddressTypeDeleteComponent } from './features/address-types/address-type-delete/address-type-delete.component';
import { AddressTypeAddComponent } from './features/address-types/address-type-add/address-type-add.component';
import { ItemAdjustmentChangeDateComponent } from './features/item/item-adjustment-work-with/item-adjustment-change-date/item-adjustment-change-date.component';
import { ItemAdjustmentDisplayComponent } from './features/item/item-adjustment-work-with/item-adjustment-display/item-adjustment-display.component';
import { InventoryAdjustmentsComponent } from './features/item/inventory-adjustments/inventory-adjustments.component';
import { AddBalanceComponent } from './features/item/item-balances/add-balance/add-balance.component';
import { StgInquiryBalanceComponent } from './features/item/item-balances/stg-inquiry-balance/stg-inquiry-balance.component';
import { DeleteBalanceComponent } from './features/item/item-balances/delete-balance/delete-balance.component';
import { InquiryBalanceComponent } from './features/item/item-balances/inquiry-balance/inquiry-balance.component';
import { InventoryTagsComponent } from './features/item/inventory-tags/inventory-tags.component';
import { ChangeInventoryTagsComponent } from './features/item/inventory-tags/change-inventory-tags/change-inventory-tags.component';
import { ListInventoryTagsComponent } from './features/item/inventory-tags/list-inventory-tags/list-inventory-tags.component';
import { DiscrepanciesInventoryTagsComponent } from './features/item/inventory-tags/discrepancies-inventory-tags/discrepancies-inventory-tags.component';
import { TagsInventoryComponent } from './features/item/inventory-tags/tags-inventory/tags-inventory.component';
import { CountSummaryInventoryTagsComponent } from './features/item/inventory-tags/count-summary-inventory-tags/count-summary-inventory-tags.component';
import { ControlGroupsInventoryTagsComponent } from './features/item/inventory-tags/control-groups-inventory-tags/control-groups-inventory-tags.component';
import { BookDetailsComponent } from './features/item/inventory-tags/book-details/book-details.component';
import { ChangeCountComponent } from './features/item/inventory-tags/book-details/change-count/change-count.component';
import { OrderStagingComponent } from './features/order-staging/order-staging.component';
import { AssignLaneOrderStagingComponent } from './features/order-staging/assign-lane-order-staging/assign-lane-order-staging.component';
import { DeleteOrderStagingComponent } from './features/order-staging/delete-order-staging/delete-order-staging.component';
import { BatchDetailsOrderComponent } from './features/order-staging/batch-details-order/batch-details-order.component';
import { WorkWithDockSchedularComponent } from './features/order-staging/work-with-dock-schedular/work-with-dock-schedular.component';
import { DockScheduleAddComponent } from './features/order-staging/work-with-dock-schedular/dock-schedule-add/dock-schedule-add.component';
import { MoveHistoryComponent } from './features/order-staging/move-history/move-history.component';
import { WorkWithBatchDetailsComponent } from './features/order-staging/work-with-batch-details/work-with-batch-details.component';
import { BillSynopsisComponent } from './features/order-staging/work-with-batch-details/bill-synopsis/bill-synopsis.component';
import { ShipConfirmComponent } from './features/order-staging/work-with-batch-details/ship-confirm/ship-confirm.component';
import { EventHistoryComponent } from './features/order-staging/work-with-batch-details/event-history/event-history.component';
import { AppointmentEntryComponent } from './features/order-staging/work-with-batch-details/appointment-entry/appointment-entry.component';
import { UserEventComponent } from './features/order-staging/work-with-batch-details/user-event/user-event.component';
import { ShortShipComponent } from './features/order-staging/work-with-batch-details/short-ship/short-ship.component';
import { ControlFieldsComponent } from './features/order-staging/work-with-batch-details/control-fields/control-fields.component';
import { DockScheduleComponent } from './features/dock-schedule/dock-schedule.component';
import { DockScheduleCreateComponent } from './features/dock-schedule/dock-schedule-create/dock-schedule-create.component';
import { DockScheduleUpdateComponent } from './features/dock-schedule/dock-schedule-update/dock-schedule-update.component';
import { DockScheduleInfoComponent } from './features/dock-schedule/dock-schedule-info/dock-schedule-info.component';
import { DockScheduleMarkHotComponent } from './features/dock-schedule/dock-schedule-mark-hot/dock-schedule-mark-hot.component';
import { LtlBatchesComponent } from './features/ltl-batches/ltl-batches.component';
import { LtlBatchChangeComponent } from './features/ltl-batches/ltl-batch-change/ltl-batch-change.component';
import { LtlBatchDetailsComponent } from './features/ltl-batches/ltl-batch-details/ltl-batch-details.component';
import { WorkWithBookDetailsComponent } from './features/work-with-book-details/work-with-book-details.component';
import { WwBookDetailsAddComponent } from './features/work-with-book-details/ww-book-details-add/ww-book-details-add.component';
import { WwBookTagInquiryComponent } from './features/work-with-book-details/ww-book-tag-inquiry/ww-book-tag-inquiry.component';
import { WorkWithBoxesComponent } from './features/work-with-boxes/work-with-boxes.component';
import { WwBoxesChangeComponent } from './features/work-with-boxes/ww-boxes-change/ww-boxes-change.component';
import { WwBoxesDeleteComponent } from './features/work-with-boxes/ww-boxes-delete/ww-boxes-delete.component';
import { WwBoxesAddComponent } from './features/work-with-boxes/ww-boxes-add/ww-boxes-add.component';
import { WwBoxesDetailsComponent } from './features/work-with-boxes/ww-boxes-details/ww-boxes-details.component';
import { WwBoxesEventInquiryComponent } from './features/work-with-boxes/ww-boxes-event-inquiry/ww-boxes-event-inquiry.component';
import { WwBoxesInquiryComponent } from './features/work-with-boxes/ww-boxes-inquiry/ww-boxes-inquiry.component';
import { WwBoxesItemLabelsComponent } from './features/work-with-boxes/ww-boxes-item-labels/ww-boxes-item-labels.component';
import { WwBoxesBundleLabelsComponent } from './features/work-with-boxes/ww-boxes-bundle-labels/ww-boxes-bundle-labels.component';
import { WwBoxesBundleManifestComponent } from './features/work-with-boxes/ww-boxes-bundle-manifest/ww-boxes-bundle-manifest.component';
import { WwBoxesUpdateStsDeleteComponent } from './features/work-with-boxes/ww-boxes-update-sts-delete/ww-boxes-update-sts-delete.component';
import { WwBoxesUpdateStatusComponent } from './features/work-with-boxes/ww-boxes-update-status/ww-boxes-update-status.component';
import { WwBoxesChgCustomerComponent } from './features/work-with-boxes/ww-boxes-chg-customer/ww-boxes-chg-customer.component';
import { WwBoxesExportBoxComponent } from './features/work-with-boxes/ww-boxes-export-box/ww-boxes-export-box.component';
import { WwMasterSerialListComponent } from './features/ww-master-serial-list/ww-master-serial-list.component';
import { WwMasterSerialListAddComponent } from './features/ww-master-serial-list/ww-master-serial-list-add/ww-master-serial-list-add.component';
import { WwMasterSerialListChangeComponent } from './features/ww-master-serial-list/ww-master-serial-list-change/ww-master-serial-list-change.component';
import { WwHazardousChemicalsComponent } from './features/ww-hazardous-chemicals/ww-hazardous-chemicals.component';
import { HazardousChemicalsChangeComponent } from './features/ww-hazardous-chemicals/hazardous-chemicals-change/hazardous-chemicals-change.component';
import { HazardousChemicalsAddComponent } from './features/ww-hazardous-chemicals/hazardous-chemicals-add/hazardous-chemicals-add.component';
import { WwConsigneeItemsComponent } from './features/consignee/ww-consignee-items/ww-consignee-items.component';
import { ConsigneeItemsChangeComponent } from './features/consignee/ww-consignee-items/consignee-items-change/consignee-items-change.component';
import { ConsigneeItemsAddComponent } from './features/consignee/ww-consignee-items/consignee-items-add/consignee-items-add.component';
import { WwConsigneeChildItemsComponent } from './features/consignee/ww-consignee-child-items/ww-consignee-child-items.component';
import { ConsigneeChildItemsAddComponent } from './features/consignee/ww-consignee-child-items/consignee-child-items-add/consignee-child-items-add.component';
import { ConsigneeChildItemsChangeComponent } from './features/consignee/ww-consignee-child-items/consignee-child-items-change/consignee-child-items-change.component';
import { WwSystemCommentsComponent } from './features/ww-system-comments/ww-system-comments.component';
import { SystemCommentsChangeComponent } from './features/ww-system-comments/system-comments-change/system-comments-change.component';
import { SystemCommentsChangeSetComponent } from './features/ww-system-comments/system-comments-change-set/system-comments-change-set.component';
import { SystemCommentsDeleteComponent } from './features/ww-system-comments/system-comments-delete/system-comments-delete.component';
import { SystemCommentsAddComponent } from './features/ww-system-comments/system-comments-add/system-comments-add.component';
import { WwSerializedInventoriesComponent } from './features/ww-serialized-inventories/ww-serialized-inventories.component';
import { SerializedDetailsComponent } from './features/ww-serialized-inventories/serialized-details/serialized-details.component';
import { SerialWorksheetComponent } from './features/ww-serialized-inventories/serial-worksheet/serial-worksheet.component';
import { SerialCountComponent } from './features/ww-serialized-inventories/serial-count/serial-count.component';
import { SerializedAdjustmentLogComponent } from './features/ww-serialized-inventories/serialized-adjustment-log/serialized-adjustment-log.component';
import { SerializedBookSynopsysComponent } from './features/ww-serialized-inventories/serialized-book-synopsys/serialized-book-synopsys.component';
import { BookToCountComponent } from './features/ww-serialized-inventories/book-to-count/book-to-count.component';
import { WwCarrierEdiDocumentsComponent } from './features/ww-carrier-edi-documents/ww-carrier-edi-documents.component';
import { CarrierEdiDocumentsChangeComponent } from './features/ww-carrier-edi-documents/carrier-edi-documents-change/carrier-edi-documents-change.component';
import { CarrierEdiDocumentsAddComponent } from './features/ww-carrier-edi-documents/carrier-edi-documents-add/carrier-edi-documents-add.component';
import { CarrierEdiDocumentsDeleteComponent } from './features/ww-carrier-edi-documents/carrier-edi-documents-delete/carrier-edi-documents-delete.component';
import { WwContentsComponent } from './features/ww-contents/ww-contents.component';
import { ContentChangeComponent } from './features/ww-contents/content-change/content-change.component';
import { ContentAddComponent } from './features/ww-contents/content-add/content-add.component';
import { ContentItemLabelComponent } from './features/ww-contents/content-item-label/content-item-label.component';
import { ContentAddPressHoldComponent } from './features/ww-contents/content-add-press-hold/content-add-press-hold.component';
import { ContentRemovePressHoldComponent } from './features/ww-contents/content-remove-press-hold/content-remove-press-hold.component';
import { ContentInquiryComponent } from './features/ww-contents/content-inquiry/content-inquiry.component';

import { FilesComponent } from './features/files/files.component';
import { AddComponent } from './features/files/add/add.component';

import { AddCommodityPrinterComponent } from './features/commodity-printers/add-commodity-printer/add-commodity-printer.component';
import { CampusBuildingsComponent } from './features/campus-buildings/campus-buildings.component';
import { AddCampusBuildingComponent } from './features/campus-buildings/add-campus-building/add-campus-building.component';
import { CommodityPrintersComponent } from './features/commodity-printers/commodity-printers.component';
import { UpdateCommodityPrinterComponent } from './features/commodity-printers/update-commodity-printer/update-commodity-printer.component';
import { DeleteCommodityPrinterComponent } from './features/commodity-printers/delete-commodity-printer/delete-commodity-printer.component';
import { SynopsisComponent } from './features/ltl-batches/ltl-batch-details/synopsis/synopsis.component';
import { MatDialog } from '@angular/material/dialog';
import { WwCommentSubcodesComponent } from './features/ww-comment-subcodes/ww-comment-subcodes.component';
import { CommentSubCodesAddComponent } from './features/ww-comment-subcodes/comment-sub-codes-add/comment-sub-codes-add.component';
import { WwCommentSubcodesChangeComponent } from './features/ww-comment-subcodes/ww-comment-subcodes-change/ww-comment-subcodes-change.component';
import { WwCustomerAddressesComponent } from './features/ww-customer-addresses/ww-customer-addresses.component';
import { CustomerAddressesAddComponent } from './features/ww-customer-addresses/customer-addresses-add/customer-addresses-add.component';
import { CustomerAddressesChangeComponent } from './features/ww-customer-addresses/customer-addresses-change/customer-addresses-change.component';
import { MapCrossReferenceComponent } from './features/map-location/map-cross-reference/map-cross-reference.component';
import { AccountSelectionComponent } from './features/account-selection/account-selection.component';
import { CustomersComponent } from './features/customers/customers.component';
import { CustomerCreateComponent } from './features/customers/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './features/customers/customer-update/customer-update.component';
import { ExtractReportSortClausesComponent } from './features/extract-report-sort-clauses/extract-report-sort-clauses.component';
import { ExtractReportSortClausesCreateComponent } from './features/extract-report-sort-clauses/extract-report-sort-clauses-create/extract-report-sort-clauses-create.component';
import { ExtractReportSortClausesUpdateComponent } from './features/extract-report-sort-clauses/extract-report-sort-clauses-update/extract-report-sort-clauses-update.component';
import { ExtractReportSortClausesDeleteComponent } from './features/extract-report-sort-clauses/extract-report-sort-clauses-delete/extract-report-sort-clauses-delete.component';
import { ExtractReportWhereClausesComponent } from './features/extract-report-where-clauses/extract-report-where-clauses.component';
import { ExtractReportWhereClausesCreateComponent } from './features/extract-report-where-clauses/extract-report-where-clauses-create/extract-report-where-clauses-create.component';
import { ExtractReportWhereClausesUpdateComponent } from './features/extract-report-where-clauses/extract-report-where-clauses-update/extract-report-where-clauses-update.component';
import { ExtractReportWhereClausesDeleteComponent } from './features/extract-report-where-clauses/extract-report-where-clauses-delete/extract-report-where-clauses-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    StorerComponent,
    StorerCreateComponent,
    StorerUpdateComponent,
    StorerDeactiveComponent,
    StorerContactsComponent,
    StorerContactCreateComponent,
    StorerContactUpdateComponent,
    StorerContactDeleteComponent,
    SroterPeriodRecordsComponent,
    SroterWriteBalanceRecordComponent,
    MapZonesComponent,
    CreateMapzoneComponent,
    UpdateMapzoneComponent,
    DeleteMapzoneComponent,
    MapLocationComponent,
    MapLocationCreateComponent,
    MapLocationUpdateComponent,
    MapLocationDeleteComponent,
    LocationStatusInquiryComponent,
    ConsigneeComponent,
    ConsigneeCreateComponent,
    ConsigneeUpdateComponent,
    ConsigneeDeleteComponent,
    ConsigneeXrefComponent,
    ExitPointsComponent,
    ExitPointsCreateComponent,
    ExitPointsUpdateComponent,
    ExitPointsDeleteComponent,
    MapLocationCreateComponent,
    MapLocationUpdateComponent,
    MapLocationDeleteComponent,
    LocationStatusInquiryComponent,
    CarriersComponent,
    CreateCarriersComponent,
    UpdateCarriersComponent,
    DeleteCarriersComponent,
    ConsineeCommentsComponent,
    OrdersComponent,
    OrderCreateComponent,
    OrderUpdateComponent,
    OrderDeleteComponent,
    OrderEventHistoryComponent,
    OrderDshipComponent,
    OrderSendtoMoveQueueComponent,
    OrderMoveHistoryInquiryComponent,
    MoveQueueComponent,
    OrderCommentsComponent,
    OrderShipConfirmComponent,
    MoveQueueChangeComponent,
    MoveQueueCompleteComponent,
    MoveQueueEntryAssignComponent,
    MoveQueueEntryInquiryComponent,
    MoveChangeStagingLocationComponent,
    MoveQueueNoPickComponent,
    MoveChangeQueuePriorityComponent,
    ItemComponent,
    CreateItemComponent,
    UpdateItemComponent,
    DeleteItemComponent,
    CrossRefItemComponent,
    ItemLotsComponent,
    ItemCommentsComponent,
    ItemBalancesComponent,
    AddBalanceComponent,
    StgInquiryBalanceComponent,
    DeleteBalanceComponent,
    InquiryBalanceComponent,
    ItemTallyWorkWithComponent,
    ItemTallyInquiryComponent,
    ItemAdjustmentWorkWithComponent,
    ItemAdjustmentInquiryComponent,
    ItemAdjustmentDeleteComponent,
    ItemRebalancesComponent,
    ItemLocationsComponent,
    CreateitemLocationComponent,
    DeleteitemlocationComponent,
    SideAdjustmentComponent,
    TwoSideAdjustmentComponent,
    ReSequenceComponent,
    OrderDetailsComponent,
    OrderDetailsCreateComponent,
    OrderDetailEditComponent,
    OrderDetailStockStatusComponent,
    OrderDetailItemStatusComponent,
    OrderDetailStackActivityComponent,
    OrderDetailChangeShipFromComponent,
    OrderDetailSplitLineComponent,
    OrderDetailCrossDocRefComponent,
    OrderDetailCommentsComponent,
    OrderDetailCutComponent,
    OrderDetailChangeEventComponent,
    OrderChangeLocLotComponent,
    OrderDetailLotStatusComponent,
    OrderDetailDeleteComponent,
    OrderDetailUcc128MaintComponent,
    OrderDetailMoveQueueComponent,
    StorerAccessInvoiceEnquiryComponent,
    StorerArAgingInquiryComponent,
    StorerRecIvcInquiryComponent,
    StorerEdiDocumentsComponent,
    StorerConsItemComponent,
    StorerUccSerCtlComponent,
    StorerUccLblCtlComponent,
    StorerPrintersComponent,
    StorerRatesBasesComponent,
    StorerChangeRatesComponent,
    StorerGen869TriggerComponent,
    StorerReasonablenessComponent,
    StorerEdiInfoComponent,
    StorerItemDefaultsComponent,
    StorerWorkWithErrorsComponent,
    StorerExportComponent,
    StorerAttributesComponent,
    StorerInvoiceInquiryComponent,
    StorerAccountStatusComponent,
    StorerAccountAttributesComponent,
    StorerXrefComponent,
    StorerAcctAttributeComponent,
    StorerCommentsComponent,
    StorerExpNoActivityComponent,
    StorerProductCodesComponent,
    StorerAutoRatesComponent,
    StorerPutawaySchemeComponent,
    StorerWwAccountAttributesComponent,
    StorerAddAccountAttributeComponent,
    StorerEditAccountAttributeComponent,
    StorerDailyStatusComponent,
    StorerShortStockComponent,
    PostalAbbreviationsComponent,
    PostalAbbreviationsAddComponent,
    PostalAbbreviationsChangeComponent,
    PostalAbbreviationsDeleteComponent,
    ReceivablesComponent,
    ReceivableAdjustInvoiceComponent,
    ReceivableCreditInvoiceComponent,
    ReceivableInquiryComponent,
    ReceivableAdjustInquiryComponent,
    ReceivableCommentsComponent,
    ReceivableDetailsComponent,
    UpdateLedgerComponent,
    AdjustmentInquiryComponent,
    TransactionInquiryComponent,
    LoginComponent,
    StorageInvoiceInquiryComponent,
    StorerAutoSchedulingProceesComponent,
    StorerAutoSchedulingProceesUpdateComponent,
    StorerAutoSchedulingProceesAddComponent,
    StorerDeleteComponent,
    ActionRsmsComponent,
    ActionRsmsAddComponent,
    ActionRsmsChangeComponent,
    StorerAutoScheduleProcresErrorComponent,
    ReceivablePrintComponent,
    ApplicationsComponent,
    ApplicationAddComponent,
    ApplicationChangeComponent,
    ApplicationModuleComponent,
    ControllBatchFileComponent,
    ControllBatchFileCreateComponent,
    ControllBatchFileEditComponent,
    ControllBatchFileDeleteComponent,
    ControllBatchFileConstraintsComponent,
    AuditHeadersComponent,
    AuditHeadersChangeComponent,
    AuditHeadersCommentsComponent,
    AuditHeadersStatusComponent,
    ApplicationAuthoritiesComponent,
    BoxContentComponent,
    BoxContentChangeComponent,
    BoxContentDeactiveComponent,
    BoxContentItemActivityComponent,
    BoxContentItemLabelComponent,
    BoxContentDeleteComponent,
    BoxContentAddPressHoldComponent,
    BoxContentRemovePressHoldComponent,
    AccountProcessingComponent,
    CreateAccountProcessingComponent,
    UpdateAccountProcessingComponent,
    DeleteAccountProcessingComponent,
    CopyWorkflowAccountProcessingComponent,
    ActivityDescriptionComponent,
    CreateActivityDescriptionComponent,
    UpdateActivityDescriptionComponent,
    BoxContentEventHistoryInquiryComponent,
    BoxContentInquiryComponent,
    BalanceErrorsComponent,
    BalanceErrorLotStatusComponent,
    BalanceErrorItemStatusComponent,
    BalanceErrorStkActInquiryComponent,
    BalanceErrorsOrdersComponent,
    BalanceErrorsAdjustmentsComponent,
    BalanceErrorsBalancesComponent,
    BalanceErrorsItemLocationsComponent,
    BalanceErrorsItemReceiversComponent,
    InventoryBooksComponent,
    InventoryBooksMissingCountComponent,
    InventoryBooksWorkSheetComponent,
    InventoryBookSynopsysComponent,
    InventoryBookToCountComponent,
    InventoryBookCountListingComponent,
    InventoryBookDeleteComponent,
    InventoryBookReservePostComponent,
    InventoryMaintainBookComponent,
    InventoryEnterCountComponent,
    InventoryLpBookToCountComponent,
    AddressTypesComponent,
    AddressTypeChangeComponent,
    AddressTypeDeleteComponent,
    AddressTypeAddComponent,
    ItemAdjustmentChangeDateComponent,
    ItemAdjustmentDisplayComponent,
    InventoryAdjustmentsComponent,
    InventoryTagsComponent,
    ChangeInventoryTagsComponent,
    ListInventoryTagsComponent,
    DiscrepanciesInventoryTagsComponent,
    TagsInventoryComponent,
    CountSummaryInventoryTagsComponent,
    ControlGroupsInventoryTagsComponent,
    BookDetailsComponent,
    ChangeCountComponent,
    OrderStagingComponent,
    AssignLaneOrderStagingComponent,
    DeleteOrderStagingComponent,
    BatchDetailsOrderComponent,
    WorkWithDockSchedularComponent,
    DockScheduleAddComponent,
    MoveHistoryComponent,
    WorkWithBatchDetailsComponent,
    BillSynopsisComponent,
    ShipConfirmComponent,
    EventHistoryComponent,
    AppointmentEntryComponent,
    UserEventComponent,
    ShortShipComponent,
    ControlFieldsComponent,
    DockScheduleComponent,
    DockScheduleAddComponent,
    DockScheduleCreateComponent,
    DockScheduleUpdateComponent,
    DockScheduleInfoComponent,
    DockScheduleMarkHotComponent,
    LtlBatchesComponent,
    LtlBatchChangeComponent,
    LtlBatchDetailsComponent,
    BookDetailsComponent,
    WorkWithBookDetailsComponent,
    WwBookDetailsAddComponent,
    WwBookTagInquiryComponent,
    WorkWithBoxesComponent,
    WwBoxesChangeComponent,
    WwBoxesDeleteComponent,
    WwBoxesAddComponent,
    WwBoxesDetailsComponent,
    WwBoxesEventInquiryComponent,
    WwBoxesInquiryComponent,
    WwBoxesItemLabelsComponent,
    WwBoxesBundleLabelsComponent,
    WwBoxesBundleManifestComponent,
    WwBoxesUpdateStsDeleteComponent,
    WwBoxesUpdateStatusComponent,
    WwBoxesChgCustomerComponent,
    WwBoxesExportBoxComponent,
    WwMasterSerialListComponent,
    WwMasterSerialListAddComponent,
    WwMasterSerialListChangeComponent,
    WwHazardousChemicalsComponent,
    HazardousChemicalsChangeComponent,
    HazardousChemicalsAddComponent,
    WwConsigneeItemsComponent,
    ConsigneeItemsChangeComponent,
    ConsigneeItemsAddComponent,
    WwConsigneeChildItemsComponent,
    ConsigneeChildItemsAddComponent,
    ConsigneeChildItemsChangeComponent,
    WwSystemCommentsComponent,
    SystemCommentsChangeComponent,
    SystemCommentsChangeSetComponent,
    SystemCommentsDeleteComponent,
    SystemCommentsAddComponent,
    WwSerializedInventoriesComponent,
    SerializedDetailsComponent,
    SerialWorksheetComponent,
    SerialCountComponent,
    SerializedAdjustmentLogComponent,
    SerializedBookSynopsysComponent,
    BookToCountComponent,
    WwCarrierEdiDocumentsComponent,
    CarrierEdiDocumentsChangeComponent,
    CarrierEdiDocumentsAddComponent,
    CarrierEdiDocumentsDeleteComponent,
    WwContentsComponent,
    ContentChangeComponent,
    ContentAddComponent,
    ContentItemLabelComponent,
    ContentAddPressHoldComponent,
    ContentRemovePressHoldComponent,
    ContentInquiryComponent,
    FilesComponent,
    AddComponent,
    CommodityPrintersComponent,
    AddCommodityPrinterComponent,
    UpdateCommodityPrinterComponent,
    DeleteCommodityPrinterComponent,
    CampusBuildingsComponent,
    AddCampusBuildingComponent,
    SynopsisComponent,
    WwCommentSubcodesComponent,
    CommentSubCodesAddComponent,
    WwCommentSubcodesChangeComponent,
    WwCustomerAddressesComponent,
    CustomerAddressesAddComponent,
    CustomerAddressesChangeComponent,
    MapCrossReferenceComponent,
    AccountSelectionComponent,
    CustomersComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    ExtractReportSortClausesComponent,
    ExtractReportSortClausesCreateComponent,
    ExtractReportSortClausesUpdateComponent,
    ExtractReportSortClausesDeleteComponent,
    ExtractReportWhereClausesComponent,
    ExtractReportWhereClausesCreateComponent,
    ExtractReportWhereClausesUpdateComponent,
    ExtractReportWhereClausesDeleteComponent
  ],
  exports: [MatDatepickerModule, MatNativeDateModule],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReceiveModule,
    ShippingModule,
    AuthModule,
    NgxMatTimepickerModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    NgxMatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCardModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    NgxMatDatetimePickerModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
    
    
]})
export class AppModule {}
