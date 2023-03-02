import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css']
})
export class UserEventComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserEventComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      billOfLading:'4785732' ,
      storer:'8508 Nission Food',
      consignee:'DOL120129330 DOLLAR Treee/Cowpens Dc11',
      eventType:'',
      code:'',
      eventDate:'',
      time:''
      
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  assignLane() {
    alert('assign lane');
  }

}
