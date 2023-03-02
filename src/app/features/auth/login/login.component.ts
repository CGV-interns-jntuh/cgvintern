import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { first } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    hasError: null,
  });
  constructor(
    private fb: FormBuilder,
    public loginSvc: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  loggedInUser: any = '';
  ngOnInit(): void {}
  login(): void {
    // console.log(this.loginForm.value.username);
    // console.log(this.loginForm.value.password);
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    let userData = { username: username, password: password };
    this.loggedInUser = this.loginSvc
      .Login(userData)
      .pipe(first())
      .subscribe({
        next: (data) => {
          console.log('received data : ', data);
          this.loggedInUser = data.username;
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          console.log(returnUrl)
          this.router.navigateByUrl(returnUrl);
        },
        error: (error) => {
          console.log('response error ', error);
        },
      });
  }
}
