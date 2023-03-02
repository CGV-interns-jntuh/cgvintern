import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-sroter-period-records',
  templateUrl: './sroter-period-records.component.html',
  styleUrls: ['./sroter-period-records.component.css']
})
export class SroterPeriodRecordsComponent implements OnInit {

  displayedColumns: string[]=['Storer','startDate','EndDate','BalWrtn','StorageInvoice','Sts','Actions'];
 // dataSource = Element;

 constructor(private activeRouter:ActivatedRoute, 
  public iHeaderSvc: IheaderService,
  @Inject(MAT_DIALOG_DATA) public anyvariable:any,
  private fb: FormBuilder,
    private dialogRef:MatDialogRef<SroterPeriodRecordsComponent>
  ) { }

  id:any
  postingDate: any
  result:any;
 // user= "IPUTTAGUNT";
  dataSource:any;

  TallyHeaders: any = [];
  //id:number=0;

  updateForm = this.fb.group({
   
    
    storerNum: [null],
    searcDate: [null]
   
   
   
  });
  
  ngOnInit(): void {
    this.posting()
  }

  user = GlobalComponent.user;
  building = GlobalComponent.building;
 // TallyHeaders: any = [];
  duplicateSource = [];

  posting(){
    this.TallyHeaders = this.iHeaderSvc
    .getAll(this.user, this.building)
    .subscribe((data) => {
      this.result = data;
      this.TallyHeaders = data;
      console.log(data);
      var res = this.result[0].data[1]?.value;
      console.log(res);

      var parsedData = JSON.parse(res);
      this.dataSource = parsedData.returnedData;
      this.duplicateSource = this.dataSource;
      console.log(this.dataSource);
    });
    
  }

  closeDialog(){
        this.dialogRef.close();
  }


}
