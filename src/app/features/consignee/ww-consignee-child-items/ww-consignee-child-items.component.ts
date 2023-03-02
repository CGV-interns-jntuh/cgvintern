import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { ConsigneeChildItemsAddComponent } from './consignee-child-items-add/consignee-child-items-add.component';

@Component({
  selector: 'app-ww-consignee-child-items',
  templateUrl: './ww-consignee-child-items.component.html',
  styleUrls: ['./ww-consignee-child-items.component.css']
})
export class WwConsigneeChildItemsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Storer',
    'Consignee',
    'Storer Item Code',
    'Buyer Item Code',
    'Sts',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Storer:'604',
      Consignee:'RICOH',
      StorerItemCode:'Long Item 1',
      BuyerItemCode:'TBP88G',
      Sts:'AC'

    },

    {
      Storer:'604',
      Consignee:'RICOH',
      StorerItemCode:'00374122',
      BuyerItemCode:'TBVE1G',
      Sts:'AC'

    },

    {
      Storer:'1979',
      Consignee:'TINA',
      StorerItemCode:'1980',
      BuyerItemCode:'5257271',
      Sts:'AC'

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
      Storer:'',
      Item:'',
      Consignee:'',
      BuyersItem:''

    })

    this.dataSource = this.duplicateSource;
  }


  addChildItem()
  {
   this.matDialog.open(ConsigneeChildItemsAddComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "autoFocus": false
    });
  }

  // changeChildItem()
  // {
  //  this.matDialog.open(ChangeConsigneeChildItemsComponent, {
  //     "width": '1000px',
  //     "maxHeight": '50vh',
  //     "autoFocus": false
  //   });
  // }



}
