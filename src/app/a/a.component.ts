import { Component } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

    my_parent:any="";
    my_child:any="";

    passInput(event:any){
      this.my_parent=event;
    }

    receiveInput(value:any){
      this.my_child=value;
    }

}
