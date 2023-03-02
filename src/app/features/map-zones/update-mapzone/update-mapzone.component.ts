import { GlobalComponent } from './../../../Global-Component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';
import { ImapZoneService } from '../imap-zone.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-mapzone',
  templateUrl: './update-mapzone.component.html',
  styleUrls: ['./update-mapzone.component.css'],
})
export class UpdateMapzoneComponent implements OnInit {
  mapZone: any;
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  dataSource = [];

  constructor(
    public iMapsvc: ImapZoneService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateMapzoneComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      buildingNumber: 13,
      zone: 'A',
      description: 'Test update',
      inboundStaging: false,
      outboundStaging: false,
      backCount: false,
      customUsage: false,
      productPutaway: false,
      productPicking: false,
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  updateMapZone() {
    var res = this.form.value;
    console.log(res);

    this.result = this.iMapsvc
      .updateMapZone(res.user)
      .subscribe((data: any) => {
        this.result = data;
        var msg = JSON.parse(this.result).returnedData.message;

        this.successMessage(msg);
      });
  }
  successMessage(msg: any) {
    Swal.fire(msg, '', 'success');
    this.dialogRef.close();
  }
}
