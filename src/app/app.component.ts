import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterIncrement, CounterDecrement, CounterReset } from './store/counter.actions';
import { Counter2Increment, Counter2Decrement, Counter2Reset } from './store/counter2.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count$: Observable<number>;
  count2$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
    this.count2$ = store.pipe(select('count2'));
  }

  increment() {
    this.store.dispatch(new CounterIncrement());
  }

  decrement() {
    this.store.dispatch(new CounterDecrement());
  }

  reset() {
    this.store.dispatch(new CounterReset());
  }

  increment2() {
    this.store.dispatch(new Counter2Increment());
  }

  decrement2() {
    this.store.dispatch(new Counter2Decrement());
  }

  reset2() {
    this.store.dispatch(new Counter2Reset());
  }
}
