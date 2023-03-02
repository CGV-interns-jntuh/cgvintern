import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';
import Swal from 'sweetalert2';
import { IheaderService } from '../../tallys/iheader.service';
import { ImapZoneService } from '../imap-zone.service';

@Component({
  selector: 'app-delete-mapzone',
  templateUrl: './delete-mapzone.component.html',
  styleUrls: ['./delete-mapzone.component.css'],
})
export class DeleteMapzoneComponent implements OnInit {
  mapZone: any;
  form!: FormGroup;
  result: any;

  constructor(
    public imapSvc: ImapZoneService,

    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteMapzoneComponent>
  ) {}

  ngOnInit(): void {
    this.mapZone = this.anyvariable;
    this.form = this.fb.group({
      buildingNumber: 13,
      zone: 'Z',
      description: 'Test Zone',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  delete() {
    this.result = this.imapSvc
      .deleteMapZone(GlobalComponent.user)
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
