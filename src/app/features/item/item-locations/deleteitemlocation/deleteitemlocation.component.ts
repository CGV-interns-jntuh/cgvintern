import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IitemService } from '../../iitem.service';
@Component({
  selector: 'app-deleteitemlocation',
  templateUrl: './deleteitemlocation.component.html',
  styleUrls: ['./deleteitemlocation.component.css'],
})
export class DeleteitemlocationComponent implements OnInit {
  item: any;
  form!: FormGroup;
  constructor(
    public itemSvc: IitemService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteitemlocationComponent>
  ) {}

  ngOnInit(): void {
    this.item = this.anyvariable;
    var floor = this.anyvariable.Floor;
    var aisle = this.anyvariable.Aisle;
    var slot = this.anyvariable.Slot;
    var data = floor + aisle + slot;

    this.form = this.fb.group({
      storer: '0013 Neils Item Storer',
      item: 'CPBKLT1 SAMPLE DSP1 BOOKLET',
      building: this.anyvariable.BldNbr,
      floorData: data,
    });
  }
  deleteItemLocation() {
    console.log('Deleted');
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
