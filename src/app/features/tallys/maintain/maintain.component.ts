import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import Swal from 'sweetalert2';
import { IheaderService } from '../iheader.service';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.css'],
})
export class MaintainComponent implements OnInit {
  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<MaintainComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
    
  ) {}
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  tally:any;

  ngOnInit(): void {
    this.form = this.fb.group({

      quantity: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('[0-9]{1,10}'),
        ],
      ],
      item: [null],
      lotCode1: [null],
      lotCode2: [null],
      lotCode3: [null],
      rateType: [null],
      dmgReas: [null],
      overrideWeight: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('[0-9]{1,10}'),
        ],
      ],
    });
  }
 
  addTallyDetail() {
    var res = this.form.value;
    console.log(this.data,'88888888');
    this.tally=this.data;
    this.result = this.iHeaderSvc
      .createTallyDetail( 
        
        res.quantity,
        res.item,
       res.lotCode1,
        res.lotCode2,
        res.lotCode3,
        res.rateType,
        res.dmgReas,
        res.overrideWeight,
        this.tally,
        this.user

        ).subscribe((data: any) => {
        this.result = data;
        console.log('Created Tally Detail');
        console.log( this.result,'*******');
        console.log(JSON.parse(this.result).returnedData.messaage);

        if(JSON.parse(this.result).success){
         const msg= JSON.parse(this.result).returnedData.message
          this.successMessage(msg);

        }else{
          const msg= JSON.parse(this.result).returnedData.message
          this.failureMessage(msg);
        }
      });
  }

  successMessage(msg:any){
    Swal.fire(msg,'','success');
    this.router.navigate(['/main-nav/tallys/read']);
  }

  failureMessage(msg:any){
    Swal.fire(msg,'','error');
   // this.router.navigate(['/main-nav/tallys/read']);
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
