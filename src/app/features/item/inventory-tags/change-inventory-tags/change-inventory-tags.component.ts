import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';

@Component({
  selector: 'app-change-inventory-tags',
  templateUrl: './change-inventory-tags.component.html',
  styleUrls: ['./change-inventory-tags.component.css'],
})
export class ChangeInventoryTagsComponent implements OnInit {
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ChangeInventoryTagsComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      BookHeader: 773,
      BookDescription: 'PICKORD',
      FrmTag: '         1',
      ToTag: '         1',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  change() {}
}
