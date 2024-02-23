import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();

  onIncrement() {    
    this.increment.emit();
  }
  onDecrement() {
    this.decrement.emit();
  }
  onReset() {
    this.reset.emit();
  }
}
