import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-components-info-page',
  templateUrl: './components-info-page.component.html',
  styleUrls: ['./components-info-page.component.css'],
})
export class ComponentsInfoPageComponent
  implements OnInit, OnDestroy, OnChanges
{
  title = 'Components Info Component';
  count = 0;
  intervalRef!: ReturnType<typeof setInterval>;

  private counter(): ReturnType<typeof setInterval> {
    return setInterval((): void => {
      console.log(this.count);
      this.count += 1;
    }, 1000);
  }

  ngOnInit(): void {
    this.intervalRef = this.counter();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
