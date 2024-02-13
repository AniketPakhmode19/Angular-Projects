import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css',
  template: `
    <div>
      The number of odd numbers emitted: {{ oddCount }}
    </div>
  `,
})
export class OddComponent {
  @Input() oddCount: number = 0;
}
