import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../tallys/iheader.service';
import { ExitPointsCreateComponent } from './exit-points-create/exit-points-create.component';
import { ExitPointsDeleteComponent } from './exit-points-delete/exit-points-delete.component';
import { ExitPointsUpdateComponent } from './exit-points-update/exit-points-update.component';
import { IexitPointsService } from './iexit-points.service';

@Component({
  selector: 'app-exit-points',
  templateUrl: './exit-points.component.html',
  styleUrls: ['./exit-points.component.css'],
})
export class ExitPointsComponent implements OnInit {
  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Storer',
    'ExitPoint',
    'Choice',
    'Description',
    'Actions',
  ];

  dataSource: any = [];
  duplicateSource: any = [];

  constructor(
    private router: Router,
    public iExitSvc: IexitPointsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Storer: '',
      ExitPoint: '',
      Choice: '',
    });
    this.getExitPoints();
    // this.dataSource = new MatTableDataSource(this.duplicateSource);
    // this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }

  exitUpdateForm(element: any) {
    this.matDialog.open(ExitPointsUpdateComponent, {
      width: '700px',
      maxHeight: '90vh',
      data: element,
      autoFocus: false,
    });
  }

  exitDeleteForm(element: any) {
    this.matDialog.open(ExitPointsDeleteComponent, {
      width: '600px',
      maxHeight: '90vh',
      data: element,
      autoFocus: false,
    });
  }

  addExitPoint() {
    this.matDialog.open(ExitPointsCreateComponent, {
      width: '700px',
      maxHeight: '90vh',
      autoFocus: false,
    });
  }
  result: any;
  getExitPoints() {
    this.iExitSvc.getExitPoint(GlobalComponent.user).subscribe((data) => {
      this.result = data;
      var res = this.result;
      console.log(data);

      var parsedData = JSON.parse(res);
      this.duplicateSource = parsedData.returnedData;
      console.log(this.duplicateSource);

      this.dataSource = new MatTableDataSource(this.duplicateSource);
      this.dataSource.paginator = this.paginator;
    });
  }
}
