import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from './store/counter.actions';
import { ArIncrement, ArDecrement, ArReset, ArAdd5 } from './store/action-reducer.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count$: Observable<number>;
  actionReducerCount$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
    this.actionReducerCount$ = store.pipe(select('actionReducerCount'));
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

  ArIncrement() {
    this.store.dispatch(new ArIncrement());
  }

  ArAdd5() {
    this.store.dispatch(new ArAdd5(5));
  }

  ArDecrement() {
    this.store.dispatch(new ArDecrement());
  }

  ArReset() {
    this.store.dispatch(new ArReset());
  }
}
