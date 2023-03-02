import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-storer-create',
  templateUrl: './storer-create.component.html',
  styleUrls: ['./storer-create.component.css']
})
export class StorerCreateComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;

  constructor(public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private activeRouter:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
   private dialogRef: MatDialogRef<StorerCreateComponent>
    ) { }

  ngOnInit(): void {
       this.form = this.fb.group({
        storerNumber: '',
        Name:'',
        address:'',
        zipCode:'',
        phoneNumber:'',
        primaryRep:'',
        creditHold:'N',
        creditLimit:'',
        building:'',
        trackQBL:'',
        standardClose:'Y',
        cutoffCodeDay:'',
        forcePSBL:'',
        comboPSBL:'N',
        cutsAllowed:'Y',
        blindTally:'',
        chepPallets:'',
        preventConsolidation:'N'

       });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
