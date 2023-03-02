import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  isLoggedIn: boolean = LoginComponent.isLoggedIn;
  isLoggedOut: boolean = LoginComponent.isLoggedOut;
  loggedUser: any;

  //console.log(this.isLoggedIn);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.loggedUser = localStorage.getItem('LoggedIn');
    console.log('asdassdfsdgfgd', localStorage.getItem('LoggedIn'));
    //    this.router.navigate(['/tallys/read']);
  }
  Logout() {
    localStorage.removeItem('LoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('building');
    localStorage.removeItem('storer');
    localStorage.removeItem('storerSuffix');
    this.router.navigateByUrl('/');
  }

  isExpanded = true;
  showreceviceSubmenu: boolean = false;
  showorderSubmenu: boolean = false;
  showtallysSubmenu: boolean = false;
  showExtractReportSubmenu : boolean = false;
  showExtractReportWhereSubmenu: boolean = false;
  showcustomersSubmenu: boolean = false;
  showshippingSubmenu: boolean = false;
  showstorerSubmenu: boolean = false;
  showBuildingSubmenu: boolean = false;
  showMapZoneSubmenu: boolean = false;
  showMapLocationSubMenu: boolean = false;
  showCarrierSubmenu: boolean = false;
  showItemSubmenu: boolean = false;
  showConsigneeSubmenu: boolean = false;
  showExitPointSubmenu: boolean = false;
  showMoveQueueSubmenu: boolean = false;
  showPostalAbbreviations: boolean = false;
  showReceivables: boolean = false;
  showWorkWithActionsRsms: boolean = false;
  showWorkWithApplication: boolean = false;
  showControllBatchFile: boolean = false;
  showAuditHeaders: boolean = false;
  showBoxContent: boolean = false;
  showAccountProcessing: boolean = false;
  showActivityDescription: boolean = false;
  showBalanceErrors: boolean = false;
  showInventoryBooks: boolean = false;
  showAddressTypes: boolean = false;
  showInventoryTagSubmenu: boolean = false;
  showOrderStagingBatches: boolean = false;
  showDockSchedules: boolean = false;
  showLtlBatches: boolean = false;
  showBookDetails: boolean = false;
  showWorkWithBoxes: boolean = false;
  showMasterSerialList: boolean = false;
  showHazardousChemicals: boolean = false;
  showSystemComments: boolean = false;
  showSerializedInventories: boolean = false;
  showCarrierEdiDocuments: boolean = false;
  showWorkWithContents: boolean = false;
  showCommodityPrinters: boolean = false;
  showFiles: boolean = false;
  showcampusBuildings: boolean = false;
  showCommentSubcodes: boolean = false;
  showCustomerAddresses: boolean = false;

  isShowing = false;
  receviedisplay = 'none';
  receviedirection = '';
  ExtractReportdirection='none';
  ExtractReportdisplay = 'none';
  ExtractReportWheredirection='none';
  ExtractReportWheredisplay = 'none';
  tallysdisplay = 'none';
  tallysdirection = '';
  customersdisplay = 'none';
  customersdirection = '';
  carrierdisplay = 'none';
  carrierdirection = '';
  ordersdisplay = 'none';
  ordersdirection = '';
  shippingsdisplay = 'none';
  shippingsdirection = '';
  mapZonedisplay = 'none';
  mapZonedirection = '';
  storerdisplay = 'none';
  storerdirection = '';
  buildingdisplay = 'none';
  buildingdirection = '';
  mapLocationDispaly = 'none';
  mapLocationDirection = '';
  itemdisplay = 'none';
  itemdirection = '';
  consigneeDisplay = 'none';
  consigneeDirection = '';
  exitPointDisplay = 'none';
  exitPointDirection = '';
  moveQueueDisplay = 'none';
  moveQueueDirection = '';
  postalAbbreviationsDisplay = 'none';
  postalAbbreviationsDirection = '';
  receivablesDisplay = 'none';
  receivablesDirection = '';
  actionRsmsDisplay = 'none';
  actionRsmsDirection = '';
  applicationDisplay = 'none';
  applicationDirection = '';
  controllBatchFileDisplay = 'none';
  controllBatchFileDirection = '';
  auditHeaderDisplay = 'none';
  auditHeaderDirection = '';
  boxContentDisplay = 'none';
  boxContentDirection = '';
  AccountProcessingDisplay = 'none';
  AccountProcessingDirection = '';
  ActivityDescriptionDisplay = 'none';
  ActivityDescriptionDirection = '';
  balanceErrorDisplay = 'none';
  balanceErrorDirection = '';
  inventoryBooksDisplay = 'none';
  inventoryBooksDirection = '';
  addressTypeDisplay = 'none';
  addressTypeDirection = '';
  inventoryTagDisplay = 'none';
  inventoryTagDirection = '';
  orderStagingBatchesDisplay = 'none';
  orderStagingBatchesDirection = '';
  dockScheduleDisplay = 'none';
  dockScheduleDirection = '';
  ltlBatchesDisplay = 'none';
  ltlBatchesDirection = '';
  bookDetailsDisplay = 'none';
  bookDetailsDirection = '';
  boxDisplay = 'none';
  boxDirection = '';
  masterSerialListDisplay = 'none';
  masterSerialListDirection = '';
  hazardousChemicalsDisplay = 'none';
  hazardousChemicalsDirection = '';
  systemCommentsDisplay = 'none';
  systemCommentsDirection = '';
  serializedInventoriesDisplay = 'none';
  serializedInventoriesDirection = '';
  carrierEdiDocumentDisplay = 'none';
  carrierEdiDocumentDirection = '';
  contentsDisplay = 'none';
  contentsDirection = '';
  commodityDisplay = 'none';
  commodityDirection = '';
  filesDisplay = 'none';
  filesDirection = '';
  campusBuildingsDisplay = 'none';
  campusBuildingsDirection = '';
  commentSubcodeDisplay = 'none';
  commentSubcodeDirection = '';
  customerAddressesDisplay = 'none';
  customerAddressesDirection = '';

  showreceviceSubmenushowhide() {
    this.showreceviceSubmenu = !this.showreceviceSubmenu;
    this.showcustomersSubmenu = false;
    this.showorderSubmenu = false;
    this.showtallysSubmenu = false;
    this.showshippingSubmenu = false;
    this.showstorerSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.storerdisplay = 'none';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.storerdirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    (this.customersdisplay = 'none'),
      (this.customersdirection = ''),
      (this.carrierdisplay = 'none');
    this.carrierdirection = '';
    this.ordersdisplay = 'none';
    this.ordersdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showreceviceSubmenu == true) {
      this.receviedisplay = '';
      this.receviedirection = '';
    } else {
      this.receviedisplay = 'none';
      this.receviedirection = '';
    }
  }

  showtallySubmenushowhide() {
    this.showreceviceSubmenu = false;
    this.showcustomersSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showstorerSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showItemSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.storerdisplay = 'none';
    this.storerdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');
    this.showtallysSubmenu = !this.showtallysSubmenu;
    if (this.showtallysSubmenu == true) {
      this.tallysdisplay = '';
      this.tallysdirection = '';
    } else {
      this.tallysdisplay = 'none';
      this.tallysdirection = '';
    }
  }

  showExtractReportSubmenushowhide() {
    this.showreceviceSubmenu = false;
    this.showcustomersSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showstorerSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showItemSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.storerdisplay = 'none';
    this.storerdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');
    this.showExtractReportSubmenu = !this.showExtractReportSubmenu;
    if (this.showExtractReportSubmenu == true) {
      this.ExtractReportdisplay = '';
      this.ExtractReportdirection = '';
    } else {
      this.ExtractReportdisplay = 'none';
      this.ExtractReportdirection = '';
    }
  }
  showExtractReportWhereSubmenushowhide() {
    this.showreceviceSubmenu = false;
    this.showcustomersSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showstorerSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showItemSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.storerdisplay = 'none';
    this.storerdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');
    this.showExtractReportWhereSubmenu = !this.showExtractReportWhereSubmenu;
    if (this.showExtractReportWhereSubmenu == true) {
      this.ExtractReportWheredisplay = '';
      this.ExtractReportWheredirection = '';
    } else {
      this.ExtractReportWheredisplay = 'none';
      this.ExtractReportWheredirection = '';
    }
  }
  showcustomersSubmenushowhide() {
    this.showcustomersSubmenu = !this.showcustomersSubmenu;
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showtallysSubmenu = false;
    this.showshippingSubmenu = false;
    this.showstorerSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.storerdisplay = 'none';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.storerdirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.ordersdisplay = 'none';
    this.ordersdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showcustomersSubmenu == true) {
      this.customersdisplay = '';
      this.customersdirection = '';
    } else {
      this.customersdisplay = 'none';
      this.customersdirection = '';
    }
  }

  showordersSubmenushowhide() {
    this.showreceviceSubmenu = false;
    this.showtallysSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showItemSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.showshippingSubmenu = false;
    this.showstorerSubmenu = false;
    this.storerdisplay = 'none';
    this.storerdirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');
    this.showorderSubmenu = !this.showorderSubmenu;
    if (this.showorderSubmenu == true) {
      this.ordersdisplay = '';
      this.ordersdirection = '';
    } else {
      this.ordersdisplay = 'none';
      this.ordersdirection = '';
    }
  }

  showshippingsSubmenushowhide() {
    this.showorderSubmenu = false;
    this.showtallysSubmenu = false;
    this.showreceviceSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showstorerSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showItemSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.storerdisplay = 'none';
    this.storerdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.ordersdisplay = 'none';
    this.ordersdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');
    this.showshippingSubmenu = !this.showshippingSubmenu;
    if (this.showshippingSubmenu == true) {
      this.shippingsdisplay = '';
      this.shippingsdirection = '';
    } else {
      this.shippingsdisplay = 'none';
      this.shippingsdirection = '';
    }
  }

  showstorerSubmenushowhide() {
    this.showreceviceSubmenu = false;
    this.showtallysSubmenu = false;
    this.showshippingSubmenu = false;
    this.showorderSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showItemSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.ordersdisplay = 'none';
    this.ordersdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');
    this.showstorerSubmenu = !this.showstorerSubmenu;
    if (this.showstorerSubmenu == true) {
      this.storerdisplay = '';
      this.storerdirection = '';
    } else {
      this.storerdisplay = 'none';
      this.storerdirection = '';
    }
  }
  

  showBuildingSubmenushowhide() {
    this.showreceviceSubmenu = false;
    this.showcustomersSubmenu = false;
    this.showtallysSubmenu = false;
    this.showshippingSubmenu = false;
    this.showorderSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showItemSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.ordersdisplay = 'none';
    this.ordersdirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.customersdisplay = 'none';
    this.customersdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');

    this.showBuildingSubmenu = !this.showBuildingSubmenu;
    if (this.showBuildingSubmenu == true) {
      this.buildingdisplay = '';
      this.buildingdirection = '';
    } else {
      this.buildingdisplay = 'none';
      this.buildingdirection = '';
    }
  }

  showMapZoneSubmenushowhide() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showtallysSubmenu = false;
    this.showItemSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');
    this.showMapZoneSubmenu = !this.showMapZoneSubmenu;
    if (this.showMapZoneSubmenu == true) {
      this.mapZonedisplay = '';
      this.mapZonedirection = '';
    } else {
      this.mapZonedisplay = 'none';
      this.mapZonedirection = '';
    }
  }

  showMapLocationMenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showItemSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    this.showMapLocationSubMenu = !this.showMapLocationSubMenu;
    if (this.showMapLocationSubMenu == true) {
      this.mapLocationDispaly = '';
      this.mapLocationDirection = '';
    } else {
      this.mapLocationDispaly = 'none';
      this.mapLocationDirection = '';
    }
  }

  showCarrierSubmenushowhide() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showItemSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showCarrierSubmenu = !this.showCarrierSubmenu;
    if (this.showCarrierSubmenu == true) {
      this.carrierdisplay = '';
      this.carrierdirection = '';
    } else {
      this.carrierdisplay = 'none';
      this.carrierdirection = '';
    }
  }

  showConsigneeSubmenuShowhide() {
    this.showConsigneeSubmenu = !this.showConsigneeSubmenu;
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showtallysSubmenu = false;
    this.showshippingSubmenu = false;
    this.showstorerSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showMoveQueueSubmenu = false;

    this.storerdisplay = 'none';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.storerdirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.ordersdisplay = 'none';
    this.ordersdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showConsigneeSubmenu == true) {
      this.consigneeDisplay = '';
      this.consigneeDirection = '';
    } else {
      this.consigneeDisplay = 'none';
      this.consigneeDirection = '';
    }
  }

  showExitPointSubMenuShowhide() {
    this.showConsigneeSubmenu = false;
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showtallysSubmenu = false;
    this.showshippingSubmenu = false;
    this.showstorerSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showExitPointSubmenu = !this.showExitPointSubmenu;
    this.showMoveQueueSubmenu = false;

    this.storerdisplay = 'none';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.storerdirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.ordersdisplay = 'none';
    this.ordersdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    (this.mapLocationDispaly = 'none'), (this.mapLocationDirection = '');
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.consigneeDisplay = 'none';
    this.consigneeDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showExitPointSubmenu == true) {
      this.exitPointDisplay = '';
      this.exitPointDirection = '';
    } else {
      this.exitPointDisplay = 'none';
      this.exitPointDirection = '';
    }
  }

  showItemSubmenushowhide() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showItemSubmenu = !this.showItemSubmenu;
    if (this.showItemSubmenu == true) {
      this.itemdisplay = '';
      this.itemdirection = '';
    } else {
      this.itemdisplay = 'none';
      this.itemdirection = '';
    }
  }

  showMoveQueueSubmenuShowhide() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;

    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showMoveQueueSubmenu = !this.showMoveQueueSubmenu;
    if (this.showMoveQueueSubmenu == true) {
      this.moveQueueDisplay = '';
      this.moveQueueDirection = '';
    } else {
      this.moveQueueDisplay = 'none';
      this.moveQueueDirection = '';
    }
  }

  showPostalAbbreviationSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;

    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showPostalAbbreviations = !this.showPostalAbbreviations;
    if (this.showPostalAbbreviations == true) {
      this.postalAbbreviationsDisplay = '';
      this.postalAbbreviationsDirection = '';
    } else {
      this.postalAbbreviationsDisplay = 'none';
      this.postalAbbreviationsDirection = '';
    }
  }

  showReceivablesSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showReceivables = !this.showReceivables;

    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showReceivables == true) {
      this.receivablesDisplay = '';
      this.receivablesDirection = '';
    } else {
      this.receivablesDisplay = 'none';
      this.receivablesDirection = '';
    }
  }

  showActionRsmsSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showReceivables = false;
    this.showWorkWithActionsRsms = !this.showWorkWithActionsRsms;

    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showWorkWithActionsRsms == true) {
      this.actionRsmsDisplay = '';
      this.actionRsmsDirection = '';
    } else {
      this.actionRsmsDisplay = 'none';
      this.actionRsmsDirection = '';
    }
  }

  showApplicationSubMenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showReceivables = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = !this.showWorkWithApplication;

    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showWorkWithApplication == true) {
      this.applicationDisplay = '';
      this.applicationDirection = '';
    } else {
      this.applicationDisplay = 'none';
      this.applicationDirection = '';
    }
  }

  showControllBatchFileSubMenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showReceivables = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = !this.showControllBatchFile;

    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showControllBatchFile == true) {
      this.controllBatchFileDirection = '';
      this.controllBatchFileDisplay = '';
    } else {
      this.controllBatchFileDisplay = 'none';
      this.controllBatchFileDirection = '';
    }
  }

  showAuditHeaderSubMenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showReceivables = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = !this.showAuditHeaders;

    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showAuditHeaders == true) {
      this.auditHeaderDisplay = '';
      this.auditHeaderDirection = '';
    } else {
      this.auditHeaderDisplay = 'none';
      this.auditHeaderDirection = '';
    }
  }

  showBoxContentSubMenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showReceivables = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showBoxContent = !this.showBoxContent;

    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showBoxContent == true) {
      this.boxContentDisplay = '';
      this.boxContentDirection = '';
    } else {
      this.boxContentDisplay = 'none';
      this.boxContentDirection = '';
    }
  }

  showAccountProcessingSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showActivityDescription = false;
    this.ActivityDescriptionDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showAccountProcessing = !this.showAccountProcessing;

    if (this.showAccountProcessing == true) {
      this.AccountProcessingDisplay = '';
      this.AccountProcessingDirection = '';
    } else {
      this.AccountProcessingDisplay = 'none';
      this.AccountProcessingDirection = '';
    }
  }

  showActivitDescriptionSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showActivityDescription = !this.showActivityDescription;

    if (this.showActivityDescription == true) {
      this.ActivityDescriptionDisplay = '';
      this.ActivityDescriptionDirection = '';
    } else {
      this.ActivityDescriptionDisplay = 'none';
      this.ActivityDescriptionDirection = '';
    }
  }

  showBalanceErrorSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showBalanceErrors = !this.showBalanceErrors;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showBalanceErrors == true) {
      this.balanceErrorDisplay = '';
      this.balanceErrorDirection = '';
    } else {
      this.balanceErrorDisplay = 'none';
      this.balanceErrorDirection = '';
    }
  }

  showInventoryBooksSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showBalanceErrors = false;
    this.showInventoryBooks = !this.showInventoryBooks;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';

    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showInventoryBooks == true) {
      this.inventoryBooksDisplay = '';
      this.inventoryBooksDirection = '';
    } else {
      this.inventoryBooksDisplay = 'none';
      this.inventoryBooksDirection = '';
    }
  }

  showAddressTypeSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showBalanceErrors = false;
    this.showInventoryBooks = false;
    this.showAddressTypes = !this.showAddressTypes;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';

    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showAddressTypes == true) {
      this.addressTypeDisplay = '';
      this.addressTypeDirection = '';
    } else {
      this.addressTypeDisplay = 'none';
      this.addressTypeDirection = '';
    }
  }

  showInventoryTagsSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.ActivityDescriptionDirection = '';
    this.ActivityDescriptionDisplay = 'none';

    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showInventoryTagSubmenu = !this.showInventoryTagSubmenu;

    if (this.showInventoryTagSubmenu == true) {
      this.inventoryTagDisplay = '';
      this.inventoryTagDirection = '';
    } else {
      this.inventoryTagDisplay = 'none';
      this.inventoryTagDirection = '';
    }
  }

  showOrderStagingSubMenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.ActivityDescriptionDirection = '';
    this.ActivityDescriptionDisplay = 'none';

    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = !this.showOrderStagingBatches;

    if (this.showOrderStagingBatches == true) {
      this.orderStagingBatchesDisplay = '';
      this.orderStagingBatchesDirection = '';
    } else {
      this.orderStagingBatchesDisplay = 'none';
      this.orderStagingBatchesDirection = '';
    }
  }

  // showOrderStagingSubMenu() {
  //   this.showreceviceSubmenu = false;
  //   this.showorderSubmenu = false;
  //   this.showshippingSubmenu = false;
  //   this.showBuildingSubmenu = false;
  //   this.showtallysSubmenu = false;
  //   this.showMapZoneSubmenu = false;
  //   this.showCarrierSubmenu = false;
  //   this.showMoveQueueSubmenu = false;
  //   this.showPostalAbbreviations = false;
  //   this.showWorkWithActionsRsms = false;
  //   this.showWorkWithApplication = false;
  //   this.showControllBatchFile = false;
  //   this.showAuditHeaders = false;
  //   this.showReceivables = false;
  //   this.showActivityDescription = false;
  //   this.ActivityDescriptionDirection = '';
  //   this.ActivityDescriptionDisplay = 'none';

  //   this.receivablesDisplay = 'none';
  //   this.receivablesDirection = '';
  //   this.showAccountProcessing = false;
  //   this.AccountProcessingDisplay = 'none';
  //   this.ActivityDescriptionDirection = '';
  //   this.itemdisplay = 'none';
  //   this.itemdirection = '';
  //   this.carrierdisplay = 'none';
  //   this.carrierdirection = '';
  //   this.receviedisplay = 'none';
  //   this.receviedirection = '';
  //   this.tallysdisplay = 'none';
  //   this.tallysdirection = '';
  //   this.buildingdisplay = 'none';
  //   this.buildingdirection = '';
  //   this.shippingsdisplay = 'none';
  //   this.shippingsdirection = '';
  //   this.mapZonedirection = '';
  //   this.mapZonedisplay = 'none';
  //   this.mapLocationDispaly = 'none';
  //   this.mapLocationDirection = '';
  //   this.exitPointDisplay = 'none';
  //   this.exitPointDirection = '';
  //   this.moveQueueDisplay = 'none';
  //   this.moveQueueDirection = '';
  //   this.inventoryBooksDisplay='none'
  //   this.inventoryBooksDirection=''
  //   this.showInventoryTagSubmenu = false;
  //   this.showOrderStagingBatches= !this.showOrderStagingBatches;

  //   if (this.showOrderStagingBatches == true) {
  //     this.orderStagingBatchesDisplay = '';
  //     this.orderStagingBatchesDirection = '';
  //   } else {
  //     this.orderStagingBatchesDisplay = 'none';
  //     this.orderStagingBatchesDirection = '';
  //   }
  // }

  showDockScheduleSubMenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showDockSchedules = !this.showDockSchedules;
    this.ActivityDescriptionDirection = '';
    this.ActivityDescriptionDisplay = 'none';

    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';

    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.inventoryBooksDisplay = 'none';
    this.inventoryBooksDirection = '';

    if (this.showDockSchedules == true) {
      this.dockScheduleDisplay = '';
      this.dockScheduleDirection = '';
    } else {
      this.dockScheduleDisplay = 'none';
      this.dockScheduleDirection = '';
    }
  }

  showLtlBatchesSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showDockSchedules = false;
    this.showLtlBatches = !this.showLtlBatches;
    this.ActivityDescriptionDirection = '';
    this.ActivityDescriptionDisplay = 'none';
    this.inventoryBooksDisplay = 'none';
    this.inventoryBooksDirection = '';

    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showLtlBatches == true) {
      this.ltlBatchesDisplay = '';
      this.ltlBatchesDirection = '';
    } else {
      this.ltlBatchesDisplay = 'none';
      this.ltlBatchesDirection = '';
    }
  }

  showBookDetailsSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showDockSchedules = false;
    this.showLtlBatches = false;

    this.showBookDetails = !this.showBookDetails;
    this.ActivityDescriptionDirection = '';
    this.inventoryBooksDisplay = 'none';
    this.inventoryBooksDirection = '';

    this.ActivityDescriptionDisplay = 'none';

    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';

    if (this.showBookDetails == true) {
      this.bookDetailsDisplay = '';
      this.bookDetailsDirection = '';
    } else {
      this.bookDetailsDisplay = 'none';
      this.bookDetailsDirection = '';
    }
  }

  showBoxSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showBalanceErrors = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showLtlBatches = false;
    this.showWorkWithBoxes = !this.showWorkWithBoxes;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showDockSchedules = false;

    if (this.showWorkWithBoxes == true) {
      this.boxDisplay = '';
      this.boxDirection = '';
    } else {
      this.boxDisplay = 'none';
      this.boxDirection = '';
    }
  }

  showMasterSerialListSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showBalanceErrors = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showLtlBatches = false;
    this.showWorkWithBoxes = false;
    this.showMasterSerialList = !this.showMasterSerialList;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showDockSchedules = false;

    if (this.showMasterSerialList == true) {
      this.masterSerialListDisplay = '';
      this.masterSerialListDirection = '';
    } else {
      this.masterSerialListDisplay = 'none';
      this.masterSerialListDirection = '';
    }
  }

  showHazardousChemicalsSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showBalanceErrors = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showLtlBatches = false;
    this.showWorkWithBoxes = false;
    this.showMasterSerialList = false;
    this.showHazardousChemicals = !this.showHazardousChemicals;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showDockSchedules = false;

    if (this.showHazardousChemicals == true) {
      this.hazardousChemicalsDisplay = '';
      this.hazardousChemicalsDirection = '';
    } else {
      this.hazardousChemicalsDisplay = 'none';
      this.masterSerialListDirection = '';
    }
  }

  showSystemCommentsSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showBalanceErrors = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showLtlBatches = false;
    this.showWorkWithBoxes = false;
    this.showMasterSerialList = false;
    this.showHazardousChemicals = false;
    this.showSystemComments = !this.showSystemComments;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showDockSchedules = false;

    if (this.showSystemComments == true) {
      this.systemCommentsDisplay = '';
      this.systemCommentsDirection = '';
    } else {
      this.systemCommentsDisplay = 'none';
      this.systemCommentsDirection = '';
    }
  }

  showSeriallizedInventoriesSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showBalanceErrors = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showLtlBatches = false;
    this.showWorkWithBoxes = false;
    this.showMasterSerialList = false;
    this.showHazardousChemicals = false;
    this.showSystemComments = false;
    this.showSerializedInventories = !this.showSerializedInventories;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showDockSchedules = false;

    if (this.showSerializedInventories == true) {
      this.serializedInventoriesDisplay = '';
      this.serializedInventoriesDirection = '';
    } else {
      this.serializedInventoriesDisplay = 'none';
      this.serializedInventoriesDirection = '';
    }
  }

  showCarrierEdiDocumentSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showBalanceErrors = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showLtlBatches = false;
    this.showWorkWithBoxes = false;
    this.showMasterSerialList = false;
    this.showHazardousChemicals = false;
    this.showSystemComments = false;
    this.showSerializedInventories = false;
    this.showCarrierEdiDocuments = !this.showCarrierEdiDocuments;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showDockSchedules = false;

    if (this.showCarrierEdiDocuments == true) {
      this.carrierEdiDocumentDisplay = '';
      this.carrierEdiDocumentDirection = '';
    } else {
      this.carrierEdiDocumentDisplay = 'none';
      this.carrierEdiDocumentDirection = '';
    }
  }

  showContentsSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showBalanceErrors = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showLtlBatches = false;
    this.showWorkWithBoxes = false;
    this.showMasterSerialList = false;
    this.showHazardousChemicals = false;
    this.showSystemComments = false;
    this.showSerializedInventories = false;
    this.showCarrierEdiDocuments = false;
    this.showWorkWithContents = !this.showWorkWithContents;
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showDockSchedules = false;

    if (this.showWorkWithContents == true) {
      this.contentsDisplay = '';
      this.contentsDirection = '';
    } else {
      this.contentsDisplay = 'none';
      this.contentsDirection = '';
    }
  }

  showCommodityPrintersSubMenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showDockSchedules = false;
    this.showLtlBatches = false;
    this.showCommodityPrinters = !this.showCommodityPrinters;
    this.ActivityDescriptionDirection = '';
    this.ActivityDescriptionDisplay = 'none';
    this.showFiles = false;
    this.filesDisplay = 'none';
    this.filesDirection = '';
    this.showcampusBuildings = false;
    this.campusBuildingsDirection = '';
    this.campusBuildingsDisplay = 'none';
    this.showBookDetails = false;
    this.bookDetailsDisplay = 'none';
    this.bookDetailsDirection = '';
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showBookDetails = false;
    this.bookDetailsDisplay = 'none';
    this.bookDetailsDirection = '';
    if (this.showCommodityPrinters == true) {
      this.commodityDisplay = '';
      this.commodityDirection = '';
    } else {
      this.commodityDisplay = 'none';
      this.commodityDirection = '';
    }
  }

  showFilesSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showDockSchedules = false;
    this.showLtlBatches = false;
    this.showFiles = !this.showFiles;
    this.ActivityDescriptionDirection = '';
    this.ActivityDescriptionDisplay = 'none';
    this.showCommodityPrinters = false;
    this.commodityDisplay = 'none';
    this.commodityDirection = '';
    this.showBookDetails = false;
    this.bookDetailsDirection = 'none';
    this.bookDetailsDisplay = '';
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    this.showcampusBuildings = false;
    this.campusBuildingsDirection = '';
    this.campusBuildingsDisplay = 'none';
    if (this.showFiles == true) {
      this.filesDisplay = '';
      this.filesDirection = '';
    } else {
      this.filesDisplay = 'none';
      this.filesDirection = '';
    }
  }

  showcampusBuildingsSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showDockSchedules = false;
    this.showLtlBatches = false;
    this.showcampusBuildings = !this.showcampusBuildings;
    this.ActivityDescriptionDirection = '';
    this.ActivityDescriptionDisplay = 'none';
    this.showCommodityPrinters = false;
    this.commodityDisplay = 'none';
    this.commodityDirection = '';
    this.showBookDetails = false;
    this.bookDetailsDirection = 'none';
    this.bookDetailsDisplay = '';
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.showFiles = false;

    this.filesDisplay = 'none';
    this.filesDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    if (this.showcampusBuildings == true) {
      this.campusBuildingsDisplay = '';
      this.campusBuildingsDirection = '';
    } else {
      this.campusBuildingsDisplay = 'none';
      this.campusBuildingsDirection = '';
    }
  }

  showcommentSubcodesSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showDockSchedules = false;
    this.showLtlBatches = false;
    this.showcampusBuildings = false;
    this.showCommentSubcodes = !this.showCommentSubcodes;
    this.ActivityDescriptionDirection = '';
    this.ActivityDescriptionDisplay = 'none';
    this.showCommodityPrinters = false;
    this.commodityDisplay = 'none';
    this.commodityDirection = '';
    this.showBookDetails = false;
    this.bookDetailsDirection = 'none';
    this.bookDetailsDisplay = '';
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.showFiles = false;

    this.filesDisplay = 'none';
    this.filesDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    if (this.showCommentSubcodes == true) {
      this.commentSubcodeDisplay = '';
      this.commentSubcodeDirection = '';
    } else {
      this.commentSubcodeDisplay = 'none';
      this.commentSubcodeDirection = '';
    }
  }

  showcustomerAddressesSubmenu() {
    this.showreceviceSubmenu = false;
    this.showorderSubmenu = false;
    this.showshippingSubmenu = false;
    this.showBuildingSubmenu = false;
    this.showtallysSubmenu = false;
    this.showMapZoneSubmenu = false;
    this.showCarrierSubmenu = false;
    this.showMoveQueueSubmenu = false;
    this.showPostalAbbreviations = false;
    this.showWorkWithActionsRsms = false;
    this.showWorkWithApplication = false;
    this.showControllBatchFile = false;
    this.showAuditHeaders = false;
    this.showReceivables = false;
    this.showActivityDescription = false;
    this.showInventoryTagSubmenu = false;
    this.showOrderStagingBatches = false;
    this.showDockSchedules = false;
    this.showLtlBatches = false;
    this.showcampusBuildings = false;
    this.showCommentSubcodes = false;
    this.showCustomerAddresses = !this.showCustomerAddresses;
    this.ActivityDescriptionDirection = '';
    this.ActivityDescriptionDisplay = 'none';
    this.showCommodityPrinters = false;
    this.commodityDisplay = 'none';
    this.commodityDirection = '';
    this.showBookDetails = false;
    this.bookDetailsDirection = 'none';
    this.bookDetailsDisplay = '';
    this.receivablesDisplay = 'none';
    this.receivablesDirection = '';
    this.showAccountProcessing = false;
    this.AccountProcessingDisplay = 'none';
    this.ActivityDescriptionDirection = '';
    this.showFiles = false;

    this.filesDisplay = 'none';
    this.filesDirection = '';
    this.itemdisplay = 'none';
    this.itemdirection = '';
    this.carrierdisplay = 'none';
    this.carrierdirection = '';
    this.receviedisplay = 'none';
    this.receviedirection = '';
    this.tallysdisplay = 'none';
    this.tallysdirection = '';
    this.buildingdisplay = 'none';
    this.buildingdirection = '';
    this.shippingsdisplay = 'none';
    this.shippingsdirection = '';
    this.mapZonedirection = '';
    this.mapZonedisplay = 'none';
    this.mapLocationDispaly = 'none';
    this.mapLocationDirection = '';
    this.exitPointDisplay = 'none';
    this.exitPointDirection = '';
    this.moveQueueDisplay = 'none';
    this.moveQueueDirection = '';
    if (this.showCustomerAddresses == true) {
      this.customerAddressesDisplay = '';
      this.customerAddressesDirection = '';
    } else {
      this.customerAddressesDisplay = 'none';
      this.customerAddressesDirection = '';
    }
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
