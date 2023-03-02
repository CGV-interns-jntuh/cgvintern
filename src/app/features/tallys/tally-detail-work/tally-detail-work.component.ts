import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../iheader.service';
import { MaintainComponent } from '../maintain/maintain.component';
import { TallyDetailCommentsComponent } from '../tally-detail-comments/tally-detail-comments.component';
import { TallyDetailDeleteComponent } from '../tally-detail-delete/tally-detail-delete.component';
import { TallyDetailPutawayLocationComponent } from '../tally-detail-putaway-location/tally-detail-putaway-location.component';
import { TallyDetailUpdateComponent } from '../tally-detail-update/tally-detail-update.component';
import { TallyPutawayUpdateComponent } from '../tally-putaway-update/tally-putaway-update.component';

@Component({
  selector: 'app-tally-detail-work',
  templateUrl: './tally-detail-work.component.html',
  styleUrls: ['./tally-detail-work.component.css']
})
export class TallyDetailWorkComponent implements OnInit {

  displayedColumns: string[] = [ 'ST', 'Item', 'Code', 'Lot Codes', 'Qty Recvd', 'Actions'];
 // dataSource = ELEMENT_DATA;

  

 
 
constructor(private activeRouter:ActivatedRoute, 
  public iHeaderSvc: IheaderService,
  private router: Router,
  private matDialog: MatDialog
 // @Inject(MAT_DIALOG_DATA) public anyvariable:any,
  //  private dialogRef:MatDialogRef<TallyDetailWorkComponent>
  ) 
    { }

  id:any
  postingDate: any
  result:any;
  user= GlobalComponent.user;
  dataSource:any;

  TallyHeaders: any = [];
  //id:number=0;
  ngOnInit(): void {
    this.posting()
  }

  posting(){
    this.id=this.activeRouter.snapshot.params['id'];
    console.log("tally Number ::"+this.id);

    this.iHeaderSvc
    .getPosts(this.user, this.id)
    .subscribe((data) => {
      console.log('DATA')
      console.log(data);
    //  this.result = data;
    //  this.TallyHeaders = data;
      
       var res = data;
    //  console.log(res);

     var parsedData =  JSON.parse(res);
     console.log( JSON.parse(res).success)
     console.log(parsedData);
     console.log(parsedData['returnedData']);
      this.dataSource = parsedData.returnedData;
    //  this.duplicateSource=this.dataSource;
      console.log(this.dataSource);
    });

    
  }

  tallyDetailUpdate(tally: any){
    this.matDialog.open(TallyDetailUpdateComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
   
      "data": tally,
      "autoFocus": false
    });

  }

  tallyDetailPutawayLocation(tally: any){
    this.matDialog.open(TallyDetailPutawayLocationComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "data": tally,
      "autoFocus": false
    });

  }

  tallyDetailPutawayLocationUpdate(tally: any){
    this.matDialog.open(TallyPutawayUpdateComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
      "data": this.id,
      "autoFocus": false
    });

  }


  tallyDetailDelete(tally: any) {
    /*this.result = this.iHeaderSvc
      .deleteTally(tally, this.user)
      .subscribe((data: any) => {
        this.result = data;
      });
    alert('Record deleted successfully.');*/

    this.matDialog.open(TallyDetailDeleteComponent, {
      "width": '1000px',
      "maxHeight": '80vh',
   
      "data": tally,
      "autoFocus": false
    });
  }

  tallyDetailsComment(tally: any) {
    console.log(tally);
    this.result = this.iHeaderSvc
      .getTallyDetailComment(tally)
      .subscribe((data: any) => {
        console.log(data);
        this.result = data;

        this.matDialog.open(TallyDetailCommentsComponent, {
          width: '750px',
          maxHeight: '75vh',
          data: tally,
          autoFocus: false,
        });
      });
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
  }

  addTally() {
    this.matDialog.open(MaintainComponent, {
      width: '1000px',
      maxHeight: '80vh',
      autoFocus: false,
      data:this.id
    });
  }
  

  closeDialog(){
      //  this.dialogRef.close();
      this.router.navigate(['/main-nav/tallys/read']);
  }
}
