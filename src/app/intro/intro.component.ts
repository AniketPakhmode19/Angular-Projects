// into.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
     name:String="Aniket Pakhmode";
     email:string="aniket@gmail.com";
     city:string="Bhandara";
     phone:number=9075235579;
     info:string="I'm from Bhandara. I am an intern at Info-Origin PVT ltd."
     info1:string="My passion is to become a good software developer."

     showIntroduction() {
      const introduction = `
        Hello. My name is ${this.name}
        ${this.info}
        ${this.info1}

        Email : ${this.email}
        City : ${this.city}
        Phone : ${this.phone}
      `;
      window.alert(introduction);
    }
}

