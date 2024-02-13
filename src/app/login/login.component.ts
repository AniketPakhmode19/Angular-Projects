import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  login() {
    if (this.username == 'aniket' && this.password == 'justdoit') {
      this.router.navigate(['/home']);
      console.log("valid");
    } else {
      this.errorMessage = 'Invalid username or password';
      console.log("Invalid");
    }
  }
}
