import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../iheader.service';

@Component({
  selector: 'app-tally-inquiry',
  templateUrl: './tally-inquiry.component.html',
  styleUrls: ['./tally-inquiry.component.css']
})
export class TallyInquiryComponent implements OnInit {

  dataSource = [];
  id: any;
  result: any;

  displayedColumns: string[] = ['Received', 'Item', 'Status'];
  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<TallyInquiryComponent>
  ) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.getTallyInquiry();

    this.form = this.fb.group({
      tally: [null],
      invoice: [null],
      storer: [null],
      building: [null],
      storerRefNo: [null],
      schdldArrival: [null],
      recvdFrom: [null],
      actualArrival: [null],
      rtnAuth: [null],
      transactionDate: [null],
      pro: [null],
      qtyExpected: [null],
      trailerNo: [null],
      qtyReceived: [null],
      carrier: [null],
      status: [null],
    });
  }
  getTallyInquiry() {
    //this.id=this.activeRouter.snapshot.params['id'];
    this.id = this.anyvariable;
    this.result = this.iHeaderSvc
      .getTallyInquiry(this.id)
      .subscribe((data: any) => {
        console.log(data);
        this.result = data;
        this.id = this.result.tallyNumber;
      });
  }

  onBack() {
    this.router.navigate(['tallys']);
 }


  closeDialog(){
    this.dialogRef.close(); 
}
}
