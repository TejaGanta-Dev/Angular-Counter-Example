import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
   Counter:number=0;

   onIncrement(){
    this.Counter++;
   }
   onDecrement(){
    this.Counter--;
   }
   onReset(){
    this.Counter=0;
   }

}
