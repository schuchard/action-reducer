import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from './store/counter.actions';
import { ArIncrement, ArDecrement, ArReset, ArAddBy, ARState } from './action-reducer/action-reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count$: Observable<number>;
  arCount$: Observable<ARState>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
    this.arCount$ = store.pipe(select('arCount'));
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

  ArAddBy() {
    this.store.dispatch(new ArAddBy(5));
  }

  ArDecrement() {
    this.store.dispatch(new ArDecrement());
  }

  ArReset() {
    this.store.dispatch(new ArReset());
  }
}
