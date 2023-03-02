import { IitemService } from './../iitem.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
})
export class UpdateItemComponent implements OnInit {
  item: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(
    public itemSvc: IitemService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateItemComponent>
  ) {}

  ngOnInit(): void {
    console.log(this.anyvariable);

    this.form = this.fb.group({
      storerNumber: 13,
      itemCode: this.anyvariable.ItemCode,
      description: this.anyvariable.Description,
      UPCTailCode: [null],
      productCode: 1,
      allowwebSelection: true,
      lottedItem: false,
      lotUnitWeight: true,
      sortMask: [null],
      applyToLot: [null],
      PlaceAfter: [null],
    });
  }

  itemUpdate() {
    console.log('updated');
  }
  closeDialog() {
    this.dialogRef.close();
  }
  back() {
    this.router.navigate(['item/read']);
  }
}
