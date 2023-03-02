import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';
import { StorerServiceService } from '../storer-service.service';
import { StorerContactCreateComponent } from './storer-contact-create/storer-contact-create.component';
import { StorerContactDeleteComponent } from './storer-contact-delete/storer-contact-delete.component';
import { StorerContactUpdateComponent } from './storer-contact-update/storer-contact-update.component';

@Component({
  selector: 'app-storer-contacts',
  templateUrl: './storer-contacts.component.html',
  styleUrls: ['./storer-contacts.component.css']
})
export class StorerContactsComponent implements OnInit {

  displayedColumns: string[] = [
    'Type',
    'Contact',
    'Name',
    'Telephone',
    'Status',
    'Actions'
  ];

 // searchText: any;

  updateForm = this.fb.group({
   
    
    contactType: [null],
    name: [null],
   
    status: 'AC',
   
  });

  result: any = [];
  dataSource = [];
  duplicateSource = [];
  singleTallyData = [];
  documents = [];
  user = GlobalComponent.user;
  building = GlobalComponent.building;
  tally: any;
  searchValue: string = '';
  condition: boolean = true;
  prevText: string = '';
  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    public storerService: StorerServiceService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}
  TallyHeaders: any = [];
  id: number = 0;
  ngOnInit(): void {

    //For Get Tally data 

    // this.TallyHeaders = this.iHeaderSvc
    //   .getAll(this.user, this.building)
    //   .subscribe((data) => {
    //     this.result = data;
    //     this.TallyHeaders = data;
    //     console.log(data);
    //     var res = this.result[0].data[1]?.value;
    //     console.log(res);

    //     var parsedData = JSON.parse(res);
    //     this.dataSource = parsedData.returnedData;
    //     this.duplicateSource = this.dataSource;
    //     console.log(this.dataSource);
    //   });
    this.TallyHeaders = this.storerService
      .getAll(this.user)
      .subscribe((data) => {
        this.result = data;
        var res = this.result;

        var parsedData = JSON.parse(res);
        this.dataSource = parsedData.returnedData;
        console.log(this.dataSource);
      });
  }
 
  // storerCreate(tally: any){
  //   this.matDialog.open(StorerCreateComponent, {
  //     "width": '1000px',
  //     "maxHeight": '80vh',
   
  //     "data": tally,
  //     "autoFocus": false
  //   });

  // }

  // storerUpdate(storer: any){
  //   this.matDialog.open(StorerUpdateComponent, {
  //     "width": '1000px',
  //     "maxHeight": '80vh',
   
  //     "data": storer,
  //     "autoFocus": false
  //   });

  // }

  // storerDeactive(storer: any){
  //   this.matDialog.open(StorerDeactiveComponent, {
  //     "width": '1000px',
  //     "maxHeight": '80vh',
   
  //     "data": storer,
  //     "autoFocus": false
  //   });

  storerConatactCreate(){

    this.matDialog.open(StorerContactCreateComponent, {
      "width": '1000px',
     "maxHeight": '80vh',
  
    // "data": storer,
     "autoFocus": false
   });

   
 }

 storerConatactUpdate(storer:any){

  this.matDialog.open(StorerContactUpdateComponent, {
    "width": '1000px',
   "maxHeight": '80vh',

   "data": storer,
   "autoFocus": false
 });
}

storerConatactDelete(storer:any){

  this.matDialog.open(StorerContactDeleteComponent, {
    "width": '1000px',
   "maxHeight": '80vh',

   "data": storer,
   "autoFocus": false
 });
}



}
