import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {

  constructor(private location: Location, private router: Router) {}

  navigateTo(route: string) {
    switch (route) {
      case 'game-control':
        this.router.navigate(['/game-control']);
        break;
      case 'angular-material':
        this.router.navigate(['/mat']);
        break;
      case 'introduction':
        this.router.navigate(['/intro']);
        break;
      case 'parent-child':
        this.router.navigate(['/a']);
        break;
      default:
        break;
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
