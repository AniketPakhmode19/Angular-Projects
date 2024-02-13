import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

    @Input() pass_parent:any="";

    @Output() myOutput=new EventEmitter();

    passInput(value:any){
      this.myOutput.emit(value);
    }
}
