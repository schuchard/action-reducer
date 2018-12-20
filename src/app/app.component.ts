import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from './store/counter1.actions';
import {
  Counter2Increment,
  Counter2Decrement,
  Counter2Reset,
  Counter2Add5,
} from './store/counter2.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count1$: Observable<number>;
  count2$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count1$ = store.pipe(select('count1'));
    this.count2$ = store.pipe(select('count2'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

  increment2() {
    this.store.dispatch(new Counter2Increment());
  }

  increment2add5() {
    this.store.dispatch(new Counter2Add5(5));
  }

  decrement2() {
    this.store.dispatch(new Counter2Decrement());
  }

  reset2() {
    this.store.dispatch(new Counter2Reset());
  }
}
