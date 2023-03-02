import { Component, OnInit } from '@angular/core';
import { IheaderService } from '../iheader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  result: any = [];
 // user = GlobalComponent.user;
 // building = GlobalComponent.building;

 user:any;
 building:any;
  
 tallyId: any;
stagingForm: any;

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}
  TallyHeaders: any = [];
  form!: FormGroup;
  update: boolean = true;
  minDate = new Date().toLocaleDateString('fr-CA');
  ngOnInit(): void {

    if(localStorage.getItem('LoggedIn')){
      this.user = localStorage.getItem('userName')
      this.building = localStorage.getItem('building')
  }else{
    this.user= GlobalComponent.user;
    this.building=GlobalComponent.building;
  }

    this.form = this.fb.group({
      storer: [ '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('[0-9]{1,10}'),
        ],
      ],
      storerRef: [null],
      billTo:[null],
      loadType: [null],
      recptType: [null],
      recvdFrom: [null],
      qty: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('[0-9]{1,10}'),
        ],
      ],
      schdldArrival: [null],
      carrier: [null],
      actualArrival: [null],
      schdldtime: [null],
      actualtime: [null],
      wgt: [null],
      pro: [null],
      car: [null],
      authorization: [null],
      seal1: [null],
      seal2: [null],
      invoiceDate: [null],
      broken1: [null],
      broken2: [null],
      returnValue: [null],
      notification: [null],
      specialCharge: [null],
      chargeType:[null]
    });

    this.route.params.subscribe((params) => {
      this.tallyId = params['id'];
    });
    if (this.tallyId) {
      this.update = true;

      this.TallyHeaders = this.iHeaderSvc
        .getAll(this.user, this.building)
        .subscribe((data: any[]) => {
          this.TallyHeaders = data;
        });
    } else {
      this.update = false;
    }
  }

  addTally() {
    var res = this.form.value;
    res.returnValue = res.returnValue ? 'Y' : 'N';
    res.broken1 = res.broken1 ? 'Y' : 'N';
    res.broken2 = res.broken2 ? 'Y' : 'N';
    res.specialCharge = res.specialCharge ? 'Y' : 'N';
    (res.invoiceDate =
      res.invoiceDate != null
        ? res.invoiceDate.toLocaleDateString('fr-CA')
        : null),
      (this.result = this.iHeaderSvc
        .createTally(
          res.storer,
          res.storerRef,
          
         res.loadType.toUpperCase(),
          res.recptType.toUpperCase(),
          res.recvdFrom.toUpperCase(),
          res.qty,
          res.schdldArrival.toLocaleDateString('fr-CA'),
          res.carrier.toUpperCase(),
          res.actualArrival.toLocaleDateString('fr-CA'),
          this.building,
          res.pro ? res.pro.toUpperCase() : '',
          res.wgt,
          this.user,
          res.schdldtime.replace(':', ''),
          res.actualtime.replace(':', ''),
          res.authorization ? res.authorization.toUpperCase() : '',
          res.car ? res.car.toUpperCase() : '',
          res.seal1 ? res.seal1.toUpperCase() : '',
          res.seal2 ? res.seal2.toUpperCase() : '',
          res.invoiceDate,
          res.returnValue,
          res.broken1,
          res.broken2,
          res.specialCharge,
          res.notification,
          res.chargeType,
          res.billTo
        )

        .subscribe((data) => {
          this.result = data;

          console.log(this.result);
          
         // console.log(JSON.parse(this.result[1]).returnedData.message);
        //  var msg= JSON.parse(this.result).returnedData.message;
         // this.successMessage(msg);

          //this.router.navigate(['tallys/comments']);
       //   this.router.navigate(['tallys']);
       if(JSON.parse(this.result[0].data[1].value).success){
        //alert('Record Created SuccessFully');
       const msg= JSON.parse(this.result[0].data[1].value).returnedData.message;
        this.successMessage(msg)
        this.router.navigate(['/main-nav/tallys/read']);
     }else{
      const msg= JSON.parse(this.result[0].data[1].value).returnedData.message;
      this.failureMessage(msg);
     }
    
        }));
  }

  successMessage(msg:any){
    Swal.fire(msg,'','success');
    this.router.navigate(['/main-nav/tallys/read']);
  }

  failureMessage(msg:any){
    Swal.fire(msg,'','error');
   // this.router.navigate(['/main-nav/tallys/read']);
  }
  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
  }

  // updateTally(tallyId: any) {
  //   var res = this.form.value;
  //   this.result = this.iHeaderSvc
  //     .updateTally(
  //       res.tally,
  //       res.storer,
  //       res.storerRef,
  //        res.loadType,
  //       res.recptType,
  //       res.recvdFrom,
  //       res.qty,
  //       res.schdldArrival,
  //       res.carrier,
  //       res.actualArrival,
  //       this.building,
  //       res.pro,
  //       res.wgt,
  //       res.schdldtime,
  //       res.actualtime,
  //       this.user
  //     )
  //     .subscribe((data) => {
  //       this.result = data;
  //     });
  //   alert('Data updated successfully');
  // }

  fetchHeaders() {
    return this.iHeaderSvc.getTallyHeaders().subscribe((data: {}) => {
      this.TallyHeaders = data;
    });
  }

}
