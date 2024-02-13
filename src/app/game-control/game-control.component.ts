import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent implements OnDestroy{
  @Output() numberEmitted = new EventEmitter<number>();
  evenCount: number = 0;
  oddCount: number = 0;
  intervalId: any;
  lastEmittedNumber: number | undefined;
  counter : number = 1;

  startGame() {
    this.intervalId = setInterval(() => {
      this.numberEmitted.emit(this.counter); // Emit random number
      this.lastEmittedNumber = this.counter;
      this.counter++;
      if (this.counter % 2 === 0) {
        this.evenCount++;
      } else {
        this.oddCount++;
      }
    }, 1500);
  }

  stopGame() {
    clearInterval(this.intervalId); // Stop the interval
  }

  restartGame() {
    this.stopGame(); // Stop the current game
    this.evenCount = 0; // Reset even count
    this.oddCount = 0; // Reset odd count
    this.lastEmittedNumber = undefined; // Clear last emitted number
    this.counter=1; //Reset acounter to 1
  }
  
  ngOnDestroy() {
    clearInterval(this.intervalId); // Clean up interval on component destroy
  }
}
