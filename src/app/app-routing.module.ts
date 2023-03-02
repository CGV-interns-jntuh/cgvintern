import { CarriersComponent } from './features/carriers/carriers.component';
import { DeleteBuildingComponent } from './features/buildings/delete-building/delete-building.component';
import { UpdateBuildingComponent } from './features/buildings/update-building/update-building.component';
import { CreateBuildingComponent } from './features/buildings/create-building/create-building.component';
import { MaintainComponent } from './features/tallys/maintain/maintain.component';
import { CommentsComponent } from './features/tallys/comments/comments.component';
import { TallysComponent } from './features/tallys/tallys.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './features/tallys/create/create.component';
import { MaintainReadComponent } from './features/tallys/maintain-read/maintain-read.component';
import { UpdateComponent } from './features/tallys/update/update.component';
import { TallyPostingComponent } from './features/tallys/tally-posting/tally-posting.component';
import { TallyDetailWorkComponent } from './features/tallys/tally-detail-work/tally-detail-work.component';
import { TallyInquiryComponent } from './features/tallys/tally-inquiry/tally-inquiry.component';
import { StorerComponent } from './features/storer/storer.component';
import { StorerCreateComponent } from './features/storer/storer-create/storer-create.component';
import { StorerUpdateComponent } from './features/storer/storer-update/storer-update.component';
import { StorerDeactiveComponent } from './features/storer/storer-deactive/storer-deactive.component';
import { BuildingsWorkWithComponent } from './features/buildings/buildings.component';
import { StorerContactsComponent } from './features/storer/storer-contacts/storer-contacts.component';

import { MapLocationComponent } from './features/map-location/map-location.component';
import { MapLocationCreateComponent } from './features/map-location/map-location-create/map-location-create.component';

import { MapZonesComponent } from './features/map-zones/map-zones.component';
import { ConsigneeComponent } from './features/consignee/consignee.component';
import { ExitPointsComponent } from './features/exit-points/exit-points.component';
import { OrdersComponent } from './features/orders/orders.component';
import { MoveQueueComponent } from './features/move-queue/move-queue.component';
import { ItemComponent } from './features/item/item.component';
import { ItemTallyWorkWithComponent } from './features/item/item-tally-work-with/item-tally-work-with.component';
import { ItemAdjustmentWorkWithComponent } from './features/item/item-adjustment-work-with/item-adjustment-work-with.component';
import { OrderDetailsComponent } from './features/orders/order-details/order-details.component';
import { StorerWwAccountAttributesComponent } from './features/storer/storer-ww-account-attributes/storer-ww-account-attributes.component';
import { PostalAbbreviationsComponent } from './features/postal-abbreviations/postal-abbreviations.component';
import { ReceivablesComponent } from './features/receivables/receivables.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StorerAutoSchedulingProceesComponent } from './features/storer/storer-auto-scheduling-procees/storer-auto-scheduling-procees.component';
import { ReceivableDetailsComponent } from './features/receivables/receivable-details/receivable-details.component';
import { InboundStagingComponent } from './features/receive/inbound-staging/inbound-staging.component';
import { InboundPutawayComponent } from './features/receive/inbound-putaway/inbound-putaway.component';
import { InboundOnestepComponent } from './features/receive/inbound-onestep/inbound-onestep.component';
import { ActionRsmsComponent } from './features/action-rsms/action-rsms.component';
import { ApplicationsComponent } from './features/applications/applications.component';
import { ControllBatchFileComponent } from './features/controll-batch-file/controll-batch-file.component';
import { AuditHeadersComponent } from './features/audit-headers/audit-headers.component';
import { BoxContentComponent } from './features/box-content/box-content.component';
import { AccountProcessingComponent } from './features/account-processing/account-processing.component';
import { ActivityDescriptionComponent } from './features/activity-description/activity-description.component';
import { BalanceErrorsComponent } from './features/balance-errors/balance-errors.component';
import { InventoryBooksComponent } from './features/inventory-books/inventory-books.component';
import { AddressTypesComponent } from './features/address-types/address-types.component';
import { InventoryAdjustmentsComponent } from './features/item/inventory-adjustments/inventory-adjustments.component';
import { InventoryTagsComponent } from './features/item/inventory-tags/inventory-tags.component';
import { OrderStagingComponent } from './features/order-staging/order-staging.component';
import { WorkWithDockSchedularComponent } from './features/order-staging/work-with-dock-schedular/work-with-dock-schedular.component';
import { WorkWithBatchDetailsComponent } from './features/order-staging/work-with-batch-details/work-with-batch-details.component';
import { DockScheduleComponent } from './features/dock-schedule/dock-schedule.component';
import { LtlBatchesComponent } from './features/ltl-batches/ltl-batches.component';
import { BookDetailsComponent } from './features/item/inventory-tags/book-details/book-details.component';
import { WorkWithBookDetailsComponent } from './features/work-with-book-details/work-with-book-details.component';
import { WorkWithBoxesComponent } from './features/work-with-boxes/work-with-boxes.component';
import { WwMasterSerialListComponent } from './features/ww-master-serial-list/ww-master-serial-list.component';
import { WwHazardousChemicalsComponent } from './features/ww-hazardous-chemicals/ww-hazardous-chemicals.component';
import { WwConsigneeItemsComponent } from './features/consignee/ww-consignee-items/ww-consignee-items.component';
import { WwConsigneeChildItemsComponent } from './features/consignee/ww-consignee-child-items/ww-consignee-child-items.component';
import { WwSystemCommentsComponent } from './features/ww-system-comments/ww-system-comments.component';
import { WwSerializedInventoriesComponent } from './features/ww-serialized-inventories/ww-serialized-inventories.component';
import { WwCarrierEdiDocumentsComponent } from './features/ww-carrier-edi-documents/ww-carrier-edi-documents.component';
import { WwContentsComponent } from './features/ww-contents/ww-contents.component';
import { FilesComponent } from './features/files/files.component';
import { CommodityPrintersComponent } from './features/commodity-printers/commodity-printers.component';
import { CampusBuildingsComponent } from './features/campus-buildings/campus-buildings.component';
import { WwCommentSubcodesComponent } from './features/ww-comment-subcodes/ww-comment-subcodes.component';
import { WwCustomerAddressesComponent } from './features/ww-customer-addresses/ww-customer-addresses.component';
import { AccountSelectionComponent } from './features/account-selection/account-selection.component';
import { CustomersComponent } from './features/customers/customers.component';
import { CustomerCreateComponent } from './features/customers/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './features/customers/customer-update/customer-update.component';
import { ExtractReportSortClausesComponent } from './features/extract-report-sort-clauses/extract-report-sort-clauses.component';
import { ExtractReportSortClausesCreateComponent } from './features/extract-report-sort-clauses/extract-report-sort-clauses-create/extract-report-sort-clauses-create.component';
import { ExtractReportSortClausesUpdateComponent } from './features/extract-report-sort-clauses/extract-report-sort-clauses-update/extract-report-sort-clauses-update.component';
import { ExtractReportWhereClausesComponent } from './features/extract-report-where-clauses/extract-report-where-clauses.component';
import { ExtractReportWhereClausesCreateComponent } from './features/extract-report-where-clauses/extract-report-where-clauses-create/extract-report-where-clauses-create.component';
import { ExtractReportWhereClausesUpdateComponent } from './features/extract-report-where-clauses/extract-report-where-clauses-update/extract-report-where-clauses-update.component';
import { ExtractReportWhereClausesDeleteComponent } from './features/extract-report-where-clauses/extract-report-where-clauses-delete/extract-report-where-clauses-delete.component';
const routes: Routes = [
  {
    path: 'receive',
    loadChildren: () =>
      import('./features/receive/receive.module').then((m) => m.ReceiveModule),
  },
  {
    path: 'tallys',
    loadChildren: () =>
      import('./features/tallys/tallys.module').then((m) => m.TallysModule),
  },

  {
    path: 'building',
    loadChildren: () =>
      import('./features/buildings/buildings.module').then(
        (m) => m.BuildingsModule
      ),
  },

  {
    path: 'main-nav',
    component: MainNavComponent,
    children: [
      {
        path: 'tallys/read',
        component: TallysComponent,
      },
      {
        path: 'customers/read',
        component: CustomersComponent,
      },
      {
        path: 'customers/add',
        component: CustomerCreateComponent,
      },
      {
        path: 'customers/update',
        component: CustomerUpdateComponent,
      },
      {
        path: 'tallys/add',
        component: CreateComponent,
      },
      {
        path: 'tallys/update',
        component: UpdateComponent,
      },
      {
        path: 'extractreport/read',
        component: ExtractReportSortClausesComponent,
      },
      {
        path: 'extractreport/add',
        component: ExtractReportSortClausesCreateComponent,
      },
      {
        path : 'extractreport/update',
        component: ExtractReportSortClausesUpdateComponent,
      }
      ,
      {
        path: 'extractreportwhere/read',
        component: ExtractReportWhereClausesComponent,
      },
      {
        path: 'extractreportwhere/add',
        component: ExtractReportWhereClausesCreateComponent,
      },
      {
        path : 'extractreportwhere/update',
        component: ExtractReportWhereClausesUpdateComponent,
      },

      {
        path: 'tallys/comments/:id',
        component: CommentsComponent,
      },
      {
        path: 'tallys/posting/:id',
        component: TallyPostingComponent,
      },
      {
        path: 'tallys/enquiry',
        component: TallyInquiryComponent,
      },
      {
        path: 'storer',
        component: StorerComponent,
      },
      {
        path: 'storer/create',
        component: StorerCreateComponent,
      },
      {
        path: 'storer/update',
        component: StorerUpdateComponent,
      },
      {
        path: 'storer/deactive',
        component: StorerDeactiveComponent,
      },
      {
        path: 'storer/account-attribute',
        component: StorerWwAccountAttributesComponent,
      },
      {
        path: 'tallys/details/:id',
        component: TallyDetailWorkComponent,
      },
      {
        path: 'storer/contacts/:id',
        component: StorerContactsComponent,
      },
      {
        path: 'storer/autoScheduleProcess',
        component: StorerAutoSchedulingProceesComponent,
      },
      {
        path: 'tallys/detail-add',
        component: MaintainComponent,
      },
      {
        path: 'tallys/maintain',
        component: MaintainComponent,
      },
      {
        path: 'tallys/maintain-read',
        component: MaintainReadComponent,
      },
      {
        path: 'building/read',
        component: BuildingsWorkWithComponent,
      },
      {
        path: 'building/add',
        component: CreateBuildingComponent,
      },
      {
        path: 'building/update',
        component: UpdateBuildingComponent,
      },
      {
        path: 'building/delete',
        component: DeleteBuildingComponent,
      },
      {
        path: 'map-location/read',
        component: MapLocationComponent,
      },

      {
        path: 'mapzone/read',
        component: MapZonesComponent,
      },
      {
        path: 'consignee/read',
        component: ConsigneeComponent,
      },
      {
        path: 'consignee/read',
        component: ConsigneeComponent,
      },
      {
        path: 'exitpoint/read',
        component: ExitPointsComponent,
      },

      {
        path: 'carrier/read',
        component: CarriersComponent,
      },

      {
        path: 'orders/read',
        component: OrdersComponent,
      },
      {
        path: 'orders/details',
        component: OrderDetailsComponent,
      },
      {
        path: 'movequeue/read',
        component: MoveQueueComponent,
      },
      {
        path: 'item/read',
        component: ItemComponent,
      },
      {
        path: 'item/tally',
        component: ItemTallyWorkWithComponent,
      },
      {
        path: 'item/adjustment',
        component: ItemAdjustmentWorkWithComponent,
      },
      {
        path: 'item/inventory-adjustment',
        component: InventoryAdjustmentsComponent,
      },
      {
        path: 'postalAbbreviation/read',
        component: PostalAbbreviationsComponent,
      },
      {
        path: 'receivables/read',
        component: ReceivablesComponent,
      },
      {
        path: 'receivables/details',
        component: ReceivableDetailsComponent,
      },

      { path: 'receive/staging', component: InboundStagingComponent },
      { path: 'receive/putaway', component: InboundPutawayComponent },
      { path: 'receive/onestep', component: InboundOnestepComponent },

      {
        path: 'action/read',
        component: ActionRsmsComponent,
      },

      {
        path: 'application/read',
        component: ApplicationsComponent,
      },

      {
        path: 'controllbatchfile/read',
        component: ControllBatchFileComponent,
      },

      {
        path: 'audit-header/read',
        component: AuditHeadersComponent,
      },

      {
        path: 'box-content/read',
        component: BoxContentComponent,
      },
      {
        path: 'accountProcessing/read',
        component: AccountProcessingComponent,
      },
      {
        path: 'activityDescription/read',
        component: ActivityDescriptionComponent,
      },
      {
        path: 'balance-error/read',
        component: BalanceErrorsComponent,
      },
      {
        path: 'inventory-books/read',
        component: InventoryBooksComponent,
      },
      {
        path: 'address-type/read',
        component: AddressTypesComponent,
      },
      {
        path: 'inventoryTags/read',
        component: InventoryTagsComponent,
      },
      {
        path: 'orderStagingBatch/read',
        component: OrderStagingComponent,
      },
      {
        path: 'orderStagingBatch/dockSchedule',
        component: WorkWithDockSchedularComponent,
      },
      {
        path: 'orderStagingBatch/batchDetails',
        component: WorkWithBatchDetailsComponent,
      },
      {
        path: 'dockSchedule/read',
        component: DockScheduleComponent,
      },
      {
        path: 'ltlBatch/read',
        component: LtlBatchesComponent,
      },
      {
        path: 'bookDetails/read',
        component: WorkWithBookDetailsComponent,
      },
      {
        path: 'boxes/read',
        component: WorkWithBoxesComponent,
      },
      {
        path: 'masterSerialList/read',
        component: WwMasterSerialListComponent,
      },
      {
        path: 'hazardousChemical/read',
        component: WwHazardousChemicalsComponent,
      },
      {
        path: 'consignee-items/read',
        component: WwConsigneeItemsComponent,
      },
      {
        path: 'consignee-child-items/read',
        component: WwConsigneeChildItemsComponent,
      },
      {
        path: 'system-comments/read',
        component: WwSystemCommentsComponent,
      },
      {
        path: 'serialized-inventories/read',
        component: WwSerializedInventoriesComponent,
      },
      {
        path: 'carrier-edi-documents/read',
        component: WwCarrierEdiDocumentsComponent,
      },
      {
        path: 'contents/read',
        component: WwContentsComponent,
      },
      {
        path: 'files/read',
        component: FilesComponent,
      },
      {
        path: 'commodityPrinters/read',
        component: CommodityPrintersComponent,
      },
      {
        path: 'campusBuildings/read',
        component: CampusBuildingsComponent,
      },
      {
        path: 'comment-subcodes/read',
        component: WwCommentSubcodesComponent,
      },
      {
        path: 'customer-addresses/read',
        component: WwCustomerAddressesComponent,
      },
    ],
  },

  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'accountSelection',
    component: AccountSelectionComponent,
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'shipping',
    loadChildren: () =>
      import('./features/shipping/shipping.module').then(
        (m) => m.ShippingModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
