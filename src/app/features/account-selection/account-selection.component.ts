import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { LoginService } from 'src/app/login/login.service';
import { IheaderService } from '../tallys/iheader.service';


@Component({
  selector: 'app-account-selection',
  templateUrl: './account-selection.component.html',
  styleUrls: ['./account-selection.component.css']
})
export class AccountSelectionComponent implements OnInit {
  userData:any;
  accountSelelctionForm:any
  storerAndBuilding:any;

  constructor(
    private router: Router,
    public loginSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  // accountSelelctionForm = this.fb.group({
  //   building: [null, Validators.required]
  // });
  
accountSelection: any = '';
  userName = GlobalComponent.user;
  result: any;
  element: any;
  
  
  ngOnInit(): void {

    this.accountSelelctionForm = this.fb.group({
      building: [null, Validators.required]
    });
    
    this.userData= history.state;
   // console.log(this.userData,'*********');
    console.log(this.userData.user,'*********');

    
    
    this.accountSelection = this.loginSvc
      .getAccountSelection(this.userData.user)
      .subscribe((data: any) => {
        this.result = data;
        var res = JSON.parse(this.result[0].data[1].value);
        this.element = res.returnedData;
        console.log(this.element);
      });
  }

  submit() {
    //alert('success');
    console.log(this.accountSelelctionForm.get('building').value,'Building Value');
    this.storerAndBuilding = this.accountSelelctionForm.get('building').value;

    localStorage.setItem('building', this.storerAndBuilding.buildingNumber);
    localStorage.setItem('storer', this.storerAndBuilding.storerNumber);
    localStorage.setItem('storerSuffix', this.storerAndBuilding.storerSuffix);
    this.router.navigateByUrl('/main-nav/tallys/read');
  }

}
