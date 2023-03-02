import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { PostalAbbreviationsAddComponent } from './postal-abbreviations-add/postal-abbreviations-add.component';
import { PostalAbbreviationsChangeComponent } from './postal-abbreviations-change/postal-abbreviations-change.component';
import { PostalAbbreviationsDeleteComponent } from './postal-abbreviations-delete/postal-abbreviations-delete.component';

@Component({
  selector: 'app-postal-abbreviations',
  templateUrl: './postal-abbreviations.component.html',
  styleUrls: ['./postal-abbreviations.component.css']
})
export class PostalAbbreviationsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Country',
    'Abbrev Type',
    'Abbrev',
    'Value',
    'Actions' 
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Country:'CTRY',
      AbbrevType:'',
      Abbrev:'Canara Islands',
      Value:''
    },
    {
      Country:'CTRY',
      AbbrevType:'',
      Abbrev:'Montenegrove',
      Value:''
    },
    {
      Country:'CTRY',
      AbbrevType:'',
      Abbrev:'Sark',
      Value:''
    },
    {
      Country:'CTRY',
      AbbrevType:'AC',
      Abbrev:'Ascenion',
      Value:''
    },
    {
      Country:'CTRY',
      AbbrevType:'AD',
      Abbrev:'Andorra',
      Value:''
    },
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      Country:'',
      Type:'',
      Abbrevation:''
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }

  addPostalAbbrevation()
  {
    this.matDialog.open(PostalAbbreviationsAddComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      "autoFocus": false
    });
  }

  changePostalAbbrevation(element:any)
  {
    this.matDialog.open(PostalAbbreviationsChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  deletePostalAbbrevation(element:any)
  {
    this.matDialog.open(PostalAbbreviationsDeleteComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

}
