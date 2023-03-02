import { IitemService } from './../iitem.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cross-ref-item',
  templateUrl: './cross-ref-item.component.html',
  styleUrls: ['./cross-ref-item.component.css'],
})
export class CrossRefItemComponent implements OnInit {
  item: any;
  form!: FormGroup;
  constructor(
    public itemSvc: IitemService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CrossRefItemComponent>
  ) {}

  ngOnInit(): void {
    this.item = this.anyvariable;
    this.form = this.fb.group({
      storerNumber: 13,
      warehouseitemCode: 'CPBKLT1',
      storeritemcode: '',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
