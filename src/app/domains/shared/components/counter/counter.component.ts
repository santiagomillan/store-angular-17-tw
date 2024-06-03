import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

  constructor() {
    //no ASYNC
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration);
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    //async, then ,subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duaration =>', this.duration);
    console.log('message =>', this.message);
  }

  ngAfterViewInit() {
    //after render
    // hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    //cuando se destruye el componente
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('doSomething change duration');
    console.log('-'.repeat(10));
  }
}
