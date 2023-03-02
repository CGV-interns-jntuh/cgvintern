import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sc-codeworks-app';
  isLoggedIn:boolean = LoginComponent.isLoggedIn;
  isLoggedOut:boolean = LoginComponent.isLoggedOut;
  
  
  ngOnInit(): void {
    
  }
  
}
    
  
  



