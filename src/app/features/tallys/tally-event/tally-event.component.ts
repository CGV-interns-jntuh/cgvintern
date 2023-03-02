import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../iheader.service';

@Component({
  selector: 'app-tally-event',
  templateUrl: './tally-event.component.html',
  styleUrls: ['./tally-event.component.css']
})
export class TallyEventComponent implements OnInit {

  displayedColumns: string[] = [ 'Date/time', 'Event', 'Description', 'User', 'Received', 'ST'];
  // dataSource = ELEMENT_DATA;
 
   
 
  
  
 constructor(private activeRouter:ActivatedRoute, 
   public iHeaderSvc: IheaderService,
   @Inject(MAT_DIALOG_DATA) public anyvariable:any,
     private dialogRef:MatDialogRef<TallyEventComponent>) { }
 
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
    // this.id=this.activeRouter.snapshot.params['id'];
     console.log("tally Number ::"+this.id);
 
     this.iHeaderSvc
     .getPosts(this.user, this.anyvariable)
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
 
   closeDialog(){
         this.dialogRef.close();
   }

}
