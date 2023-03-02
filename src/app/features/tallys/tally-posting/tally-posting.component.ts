import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IheaderService } from '../iheader.service';
import { MAT_DIALOG_DATA,MatDialogRef, _closeDialogVia } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';

//  export interface TallyPosting {
//   tally: number;
//   sequence: number;
//   severity: string;
//   message: string;
//   item : string;
//   code: string;
//   intransit: string;
//   receive: string;
// }

// const ELEMENT_DATA: TallyPosting[] = [
//   {
//     tally: 123,
//     sequence: 1236,
//     severity:"",
//     message:"",
//     item:"",
//     code:"",
//     intransit:"",
//     receive:"td",
//   },
//   {
//     tally: 1234,
//     sequence: 1436,
//     severity:"severity",
//     message:"message",
//     item:"item",
//     code:"code",
//     intransit:"intransit",
//     receive:"receive",
//   }
// ] 

@Component({
  selector: 'app-tally-posting',
  templateUrl: './tally-posting.component.html',
  styleUrls: ['./tally-posting.component.css']
})
export class TallyPostingComponent implements OnInit {

  

  displayedColumns: string[] = ['tally', 'sequence', 'severity', 'message', 'item', 'code', 'intransit', 'receive'];
 // dataSource = ELEMENT_DATA;

  

 
 
constructor(private activeRouter:ActivatedRoute, 
  public iHeaderSvc: IheaderService,
  @Inject(MAT_DIALOG_DATA) public anyvariable:any,
    private dialogRef:MatDialogRef<TallyPostingComponent>) { }

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
