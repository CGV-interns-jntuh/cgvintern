import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../iheader.service';

@Component({
  selector: 'app-maintain-read',
  templateUrl: './maintain-read.component.html',
  styleUrls: ['./maintain-read.component.css']
})
export class MaintainReadComponent implements OnInit {

  displayedColumns: string[] = [
    'Tally',
    'Quantity',
    'item',
    'lotCodes',
    'rateType',
    'dmgAreas'


  ];
  
  result: any = [];
  dataSource = [];
  documents = [];
  user = GlobalComponent.user;
  building = GlobalComponent.building;
  tally: any;
  searchValue: string = '';
  condition: boolean = true;
  prevText: string = '';
  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder
  ) {}
  TallyHeaders: any = [];

  ngOnInit(): void {
    this.TallyHeaders = this.iHeaderSvc
      .getAll(this.user, this.building)
      .subscribe((data) => {
        this.result = data;
        this.TallyHeaders = data;
        var res = this.result[0].data[1]?.value;
        var parsedData = JSON.parse(res);
        this.dataSource = parsedData.returnedData;
        console.log(this.dataSource);
      });
  }

  comment() {
    alert('Comment added');
  }

 
  onBack() {
    this.router.navigate(['tally']);
  }
  onSubmit(event: any) {
    this.condition = true;
    this.prevText = this.searchValue;
  }

  handleClick(event: Event) {
    const { target } = event;
    console.log(target);
  }

  addTally() {
    this.router.navigate(['tallys/add']);
  }

  getTally(tally: any) {
    this.iHeaderSvc.getByTally(this.user, tally).subscribe((data) => {});
  }

  delete(tally: any) {
    this.result = this.iHeaderSvc
      .deleteTally(tally, this.user)
      .subscribe((data: any) => {
        this.result = data;
      });
    alert('Record deleted successfully');
  }

  onTallyClick(tally: { Id: any }) {
    this.router.navigate(['tallys/view', tally.Id]);
  }

}
