import { ImapZoneService } from './../imap-zone.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-mapzone',
  templateUrl: './create-mapzone.component.html',
  styleUrls: ['./create-mapzone.component.css'],
})
export class CreateMapzoneComponent implements OnInit {
  constructor(
    private router: Router,
    public imapSvc: ImapZoneService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<CreateMapzoneComponent>
  ) {}

  form!: FormGroup;
  result: any;
  ngOnInit(): void {
    this.form = this.fb.group({
      buildingNumber: [null],
      zone: [null],
      description: [null],
      inboundStaging: false,
      outboundStaging: false,
      backCount: false,
      customUsage: false,
      productPutaway: false,
      productPicking: false,
    });
  }

  closeDialog() {
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  addMapZone() {
    var res = this.form.value;
    console.log(res);

    this.result = this.imapSvc
      .createMapZone(GlobalComponent.user)
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
