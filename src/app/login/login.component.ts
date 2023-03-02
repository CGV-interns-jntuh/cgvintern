import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, switchAll } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 logoImage:string='assets/images/logo.png';
 userName:any;
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    hasError: null,
  });
  public static isLoggedIn: boolean = false;
  public static isLoggedOut: boolean = true;
  constructor(
    private fb: FormBuilder,
    public loginSvc: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  loggedInUser: any = '';
  ngOnInit(): void { }
  login(): void {
    // console.log(this.loginForm.value.username);
    //console.log(this.loginForm.value.password);
    let username = this.loginForm.value.username;
    console.log(username);
    
    
    let password = this.loginForm.value.password;
    console.log(password)
    let userData = { username: username, password: password };
    this.loggedInUser = this.loginSvc
      .Login(userData)
      //  .pipe(first())
      .subscribe({
        next: (data) => {
          console.log('received data : ', data);
          this.loggedInUser = data.username;
          this.userName=data.username;

          console.log('am here')
          localStorage.setItem('LoggedIn', 'true');
          localStorage.setItem('userName', data.user);
          this.router.navigateByUrl('/accountSelection',{state : data});

        },
        error: (error) => {
          alert("Invalid Username or Password");
          console.log('response error ', error);
        },
      });

  }

}
          // console.log(LoginComponent.isLoggedOut);
          // LoginComponent.isLoggedIn=true;
          // LoginComponent.isLoggedOut=false;
 // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // console.log(returnUrl)
        // console.log(LoginComponent.isLoggedOut);
        // this.router.navigateByUrl(returnUrl);
          // get return url from query parameters or default to home page
        //  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
         // this.router.navigateByUrl(returnUrl);