import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterIncrement, CounterDecrement, CounterReset } from './store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
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
}
