import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { ConsigneeCreateComponent } from './consignee-create/consignee-create.component';
import { ConsigneeDeleteComponent } from './consignee-delete/consignee-delete.component';
import { ConsigneeUpdateComponent } from './consignee-update/consignee-update.component';
import { ConsigneeXrefComponent } from './consignee-xref/consignee-xref.component';
import { ConsineeCommentsComponent } from './consinee-comments/consinee-comments.component';

@Component({
  selector: 'app-consignee',
  templateUrl: './consignee.component.html',
  styleUrls: ['./consignee.component.css']
})
export class ConsigneeComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Code',
    'Name',
    'Zip Code',
    'City',
    'State',
    'Actions' 
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      code:'ABB1660T5A3',
      name:'ABBott Laboratories Ltd',
      zipCode:'T5A 3',
      city:'Edmonton',
      state:'AB'
    },
    {
      code:'ABB610517362',
      name:'ABBY Sneeringer',
      zipCode:'17362',
      city:'Spring Grove',
      state:'PA'
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
      Code:'',
      Name:''
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }

  consigneeUpdateForm(element:any){
    this.matDialog.open(ConsigneeUpdateComponent, {
      "width": '5000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });}

  

  consigneeDeleteForm(element:any){
    this.matDialog.open(ConsigneeDeleteComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  consigneeComments(element:any){
    this.matDialog.open(ConsineeCommentsComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  consigneeXRefForm(element:any){
    this.matDialog.open(ConsigneeXrefComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  addConsignee(){
    this.matDialog.open(ConsigneeCreateComponent, {
      "width": '1000px',
      "maxHeight": '100vh',
      "autoFocus": false
    });
  }

  consigneeItems(){
    this.router.navigate(['/main-nav/consignee-items/read']);
    // this.matDialog.open(ConsigneeCreateComponent, {
    //   "width": '1000px',
    //   "maxHeight": '100vh',
    //   "autoFocus": false
    // });
  }


  consigneeChildItems(){
    this.router.navigate(['/main-nav/consignee-child-items/read']);
    // this.matDialog.open(ConsigneeCreateComponent, {
    //   "width": '1000px',
    //   "maxHeight": '100vh',
    //   "autoFocus": false
    // });
  }

}
