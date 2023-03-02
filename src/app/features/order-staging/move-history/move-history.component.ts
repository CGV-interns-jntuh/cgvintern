import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-move-history',
  templateUrl: './move-history.component.html',
  styleUrls: ['./move-history.component.css']
})
export class MoveHistoryComponent implements OnInit {

  form!:FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Move Number',
    'Item',
    'Lot',
    'Type',
    'Sub',
    'Quantity'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      MoveNumber:'70248318',
      Item:'07672',
      Lot:'011819',
      Type:'BK',
      Sub:'PA',
      Quantity:'1C (1)'
    },
    {
      MoveNumber:'70248319',
      Item:'07672',
      Lot:'011819',
      Type:'BK',
      Sub:'PA',
      Quantity:'4C (4)'
    },

    {
      MoveNumber:'70248320',
      Item:'19662',
      Lot:'011219',
      Type:'BK',
      Sub:'PA',
      Quantity:'2C (2)'
    },

    {
      MoveNumber:'70248321',
      Item:'19662',
      Lot:'011219',
      Type:'MR',
      Sub:'RD',
      Quantity:'2C (2)'
    },

    {
      MoveNumber:'70248322',
      Item:'19662',
      Lot:'011219',
      Type:'BK',
      Sub:'PA',
      Quantity:'2C (2)'
    },

    {
      MoveNumber:'70248323',
      Item:'23001',
      Lot:'121418',
      Type:'BK',
      Sub:'PA',
      Quantity:'3C+1 (7)'
    },
 
  ]
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<MoveHistoryComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      
      Account:'8508 Nissin Foods' ,
      Document:123455235,
      Sort:'Move Number',
      PendingMoves:'',
      CompletedMoves:'6',
      TransactionType:'PK'
      
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
