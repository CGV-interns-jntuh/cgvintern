import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';
import { GlobalComponent } from 'src/app/Global-Component';
import Swal from 'sweetalert2';
import { StorerServiceService } from '../../storer-service.service';

@Component({
  selector: 'app-storer-contact-update',
  templateUrl: './storer-contact-update.component.html',
  styleUrls: ['./storer-contact-update.component.css']
})
export class StorerContactUpdateComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    public iHeaderSvc: IheaderService,
    private storerContactService : StorerServiceService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerContactUpdateComponent>

  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Consignee: 'STOR0011',
      contactName:'kpaver',
      telePhone:'',
      cellPhone:'',
      contactType:'CSR',
      faxNumber:'',
      emailAddress:'kpaver@CTCODEWORKS.COM',
      emailFormat:'',
      statusCode:'AC'
     });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  editStorerContact(){

    var res = this.form.value;
    console.log(res);

    
    // console.log(res.schdldtime);
    // console.log(res.actualtime);
    // res.tally= this.element.IHTALY;
    // res.schdldtime = Number(res.schdldtime.replace(':',''));
    // res.actualtime = Number(res.actualtime.replace(':',''));
   
    // res.schdldArrival = this.datePipe.transform(res.schdldArrival, 'yyyy-MM-dd');
    // res.actualArrival = this.datePipe.transform(res.actualArrival, 'yyyy-MM-dd');
    // res.building = this.building;
    // res.user = this.user;
    // console.log(res);
    // this.result = this.iHeaderSvc
    //   .updateTally(
    //     res.tally,
    //     res.storer,
    //     res.storerRef,
    //     res.loadType,
    //     res.recptType,
    //     res.recvdFrom,
    //     res.qty,
    //     res.schdldArrival,
    //     res.carrier,
    //     res.actualArrival,
    //     this.building,
    //     res.pro,
    //     res.wgt,
    //     res.scdldTime,
    //     res.actualTime,
    //     this.user
    //   )
    //   .subscribe((data) => {
    //     this.result = data;
    //     console.log('Updated DATA');
    //     console.log(this.result);
    //   });
    // alert('Data updated successfully');
   // this.router.navigate(['tallys']);
    
  }

  updateStorerContact(){
    var res = this.form.value;
    console.log(res);

    this.result = this.storerContactService
      .storerContactUpdate(
        res.Consignee,
        res.cellPhone,
        res.contactName,
        res.contactType,
        res.emailAddress,
        res.emailFormat,
        res.faxNumber,
        res.statusCode,
        res.telePhone,
        this.user
      )
      .subscribe((data) => {
        this.result = data;
        console.log('Updated DATA');
        console.log(this.result);
        var msg =JSON.parse(this.result).returnedData.message;
        this.showSuccessMsg(msg)
       
      });


  }

  showSuccessMsg(msg:any){
    Swal.fire(msg,'','success');
  }

}
