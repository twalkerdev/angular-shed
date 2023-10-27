import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-is-five',
  templateUrl: './is-five.component.html',
  styleUrls: ['./is-five.component.css'],
})
export class IsFiveComponent implements OnChanges {
  @Input() count!: number;
  dividesByFive = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.dividesByFive =
      changes['count'].currentValue % 5 === 0 ? 'Yeh baby!!' : 'Nah, sorry.';
  }
}
