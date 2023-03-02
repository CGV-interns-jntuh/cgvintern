import { IitemService } from './../iitem.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css'],
})
export class DeleteItemComponent implements OnInit {
  item: any;
  form!: FormGroup;
  constructor(
    public itemSvc: IitemService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteItemComponent>
  ) {}

  ngOnInit(): void {
    this.item = this.anyvariable;
    this.form = this.fb.group({
      storerNumber: 13,
      itemCode: this.anyvariable.ItemCode,
      description: this.anyvariable.Description,
    });
  }
  deleteItem() {
    alert('Deleted');
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
