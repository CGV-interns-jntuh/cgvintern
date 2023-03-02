import { DatePipe,  } from '@angular/common';
import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../iheader.service';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[DatePipe]
})
export class UpdateComponent implements OnInit {

  result: any;
  result1:any;
  //user = GlobalComponent.user;
 // building = GlobalComponent.building;
 user:any;
 building:any;
  tallyId: any;
  singleTally:any=[]; 
  element:any;
  schTime:any;
  arhTime:any;

  

  scTime(){
    this.schTime = this.element.IHSCHT.replace(/(.{2})$/,':$1');
  }

  arhsTime(){
    this.arhTime = this.element.IHACTT.replace(/(.{2})$/,':$1');
  }
  

  
 
  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
  //  @Inject(MAT_DIALOG_DATA) public anyvariable:any,
    //private dialogRef:MatDialogRef<UpdateComponent>
  ) { 
  }
  TallyHeaders: any = [];
  form!: FormGroup;
  update: boolean = true;
  minDate = new Date().toLocaleDateString('fr-CA');

  sTime:any;
  

  ngOnInit(): void {

    if(localStorage.getItem('LoggedIn')){
      this.user = localStorage.getItem('userName')
      this.building = localStorage.getItem('building')
  }else{
    this.user= GlobalComponent.user;
    this.building=GlobalComponent.building;
  }
    this.element=history.state;
    this.sTime= this.element.IHSCHT;
//   this.element = this.anyvariable;
  //  console.log(this.sTime);
   
    console.log()
    this.form = this.fb.group({
      storer: [
        this.element.IHSTOR,
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('[0-9]{1,10}'),
        ],
      ],
      storerRef: this.element.IHSTRF,
      billTo:this.element.IHSTRF,
      loadType: this.element.IHLDTY,
      recptType: this.element.IHRCPT,
      recvdFrom: this.element.IHCONS,
      qty: [
        this.element.IHTQTY,
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('[0-9]{1,10}'),
        ],
      ],
      schdldArrival: this.element.IHSCHA,
      carrier: this.element.IHCARR,
      actualArrival: this.element.IHACTA,
      schdldtime: this.formatCustomTime(this.element.IHSCHT),
      actualtime: this.formatCustomTime(this.element.IHACTT),
      wgt: this.element.IHTWGT,
      pro: this.element.IHPRO,
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
      chargeType:this.element.IHCHTY
    });

    this.route.params.subscribe((params) => {
     // this.singleTally = params['id'];
     this.tallyId = params['id'];
     console.log(this.tallyId);
     
    });
   
    // this.result1 = this.iHeaderSvc
    //     .getByTally(this.user,this.tallyId)
    //    .subscribe((data: any) => {
    //     console.log('********* *****'+data.JSON. stringify());
    //       this.result = data;

    //       this.result.forEach(element => {

    //       })
        
    //      console.log('FROM COMMENTS APP'); 
    //     });

    // this.TallyHeaders = this.iHeaderSvc
    // .getAll(this.user, this.building)
    // .subscribe((data) => {
    //   this.result = data;
    //   this.TallyHeaders = data;
    //   var res = this.result[0].data[1]?.value;
    //   var parsedData = JSON.parse(res);
    //   this.result = parsedData.returnedData;
    //   console.log(this.result);

      
     
    // });
        console.log(' Data :'+this.result1);
        this.tallyId=this.element.IHTALY;
        console.log(this.tallyId,'Talyy Id');
   
  }

  changeTimeFormat(time:any){
    if(time){
      return time.replace(/(.{2})$/,':$1');
    }
     // return time.replace(/(.{2})$/,':$1');
  }

  formatCustomTime(schdldtime:any)
  {
    var res = schdldtime+'';
    if(res!=undefined && res.length>=4)
    {
      console.log(res.substring(0,2)+':'+res.substring(2,4))
      return res.substring(0,2)+':'+res.substring(2,4);
    }else
    {
    console.log(res.length);
   return res;
    }
  }


  closeDialog(){
   // this.dialogRef.close();
  }
 
 
   onBack() {
     this.router.navigate(['/main-nav/tallys/read']);
  }

  updateTally(tallyId: any) {
    var res = this.form.value;
    res.returnValue = res.returnValue ? 'Y' : 'N';
    res.broken1 = res.broken1 ? 'Y' : 'N';
    res.broken2 = res.broken2 ? 'Y' : 'N';
    res.specialCharge = res.specialCharge ? 'Y' : 'N';
    (res.invoiceDate =
      res.invoiceDate != null
        ? res.invoiceDate.toLocaleDateString('fr-CA')
        : null),
    res.building = this.building;
    res.user = this.user;
    console.log(res);
    this.result = this.iHeaderSvc
      .updateTally(
       
        res.storer,
        res.storerRef,
        res.loadType,
        res.recptType,
        res.recvdFrom,
        res.qty,
        res.schdldArrival,
        res.carrier,
        res.actualArrival,
        this.building,
        res.pro,
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
          res.broken1 ? res.broken1.toUpperCase() : '',
          res.broken2 ? res.broken2.toUpperCase() : '',
          res.specialCharge ? res.specialCharge.toUpperCase() : '',
          res.notification ? res.notification.toUpperCase() : '',
          res.chargeType,
          res.billTo,
          this.tallyId,
      )
      .subscribe((data) => {
        this.result = data;
        console.log('Updated DATA');
       // console.log(this.result, '********');
       // console.log(this.result[0].data[1].value);
       // console.log(JSON.parse(this.result[0].data[1].value).returnedData.message);
      //  console.log()
      if(JSON.parse(this.result[0].data[1].value).success){
        //alert('Record Created SuccessFully');
       const msg= JSON.parse(this.result[0].data[1].value).returnedData.message;
        this.successMessage(msg)
        this.router.navigate(['/main-nav/tallys/read']);
     }else{
      const msg= JSON.parse(this.result[0].data[1].value).returnedData.message;
      this.failureMessage(msg);
     }
      });
    //alert('Data updated successfully');
   // this.router.navigate(['/main-nav/tallys/read']);
   
  }

  successMessage(msg:any){
    Swal.fire(msg,'','success');
    this.router.navigate(['/main-nav/tallys/read']);
  }

  failureMessage(msg:any){
    Swal.fire(msg,'','error');
   // this.router.navigate(['/main-nav/tallys/read']);
  }

  fetchHeaders() {
    return this.iHeaderSvc.getTallyHeaders().subscribe((data: {}) => {
      this.TallyHeaders = data;
    });
  }

}
