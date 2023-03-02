import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-rates-bases',
  templateUrl: './storer-rates-bases.component.html',
  styleUrls: ['./storer-rates-bases.component.css']
})
export class StorerRatesBasesComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;

  constructor(public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private activeRouter:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
   private dialogRef: MatDialogRef<StorerRatesBasesComponent>
    ) { }

  ngOnInit(): void {
       this.form = this.fb.group({
        storer: '69',
        defaultFrieghtCharge:'',
        defaultCodCharge:'PS',
        defferedHandlingPerdentage:'40',
        reccStorageRate:'',
        reccStorageBasis:'',
        recvStorageRate:'',
        recvStorageBasis:'',
        regHandlingRate:'',
        regHandlingBasis:'',
        altrHandlingRate:'',
        altrHandlingBasis:'',
        distbHandlingRate:'',
        distbHandlingBasis:'',
        
        insuLiabilityBais:'',
        amount:'',
        wrLotMin:'',
        storageLotMin:'',
        wrItemHdlMin:'',
        storageItemMin:'',
        wrItemStgMin:'',
        storageInvoiceMin:'',
        wrStorageMin:'',
        wrHandlingMin:''

        

       });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
