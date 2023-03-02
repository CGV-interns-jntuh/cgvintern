import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { ToastrService } from 'ngx-toastr/public_api';

import { IheaderService } from 'src/app/features/tallys/iheader.service';
import { GlobalComponent } from 'src/app/Global-Component';
import Swal from 'sweetalert2';
import { StorerServiceService } from '../../storer-service.service';

@Component({
  selector: 'app-storer-contact-create',
  templateUrl: './storer-contact-create.component.html',
  styleUrls: ['./storer-contact-create.component.css']
})
export class StorerContactCreateComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;

  constructor(
    public iHeaderSvc: IheaderService,
    private storerContactService : StorerServiceService,
   // private toast : ToastrService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerContactCreateComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Consignee: '',
      contactName:'',
      telePhone:'',
      cellPhone:'',
      contactType:'',
      faxNumber:'',
      emailAddress:'',
      emailFormat:'',
      statusCode:''
     });
  }

  addStorerContact(){
    var res = this.form.value;
    console.log(res);

    this.result = this.storerContactService
      .storerCreate(
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
      //  this.toast.success('Record Added Successfully','msg');
      console.log(JSON.parse(this.result).returnedData.message);
      var msg= JSON.parse(this.result).returnedData.message;
      this.successMessage(msg);
    
        
       // this.dialogRef.close();
    //   this.closeDialog();
      });

      
  }

  successMessage(msg:any){
    Swal.fire(msg,'','success');
    this.dialogRef.close();
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
