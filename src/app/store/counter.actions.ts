import { Action } from '@ngrx/store';

export class CounterIncrement implements Action {
  readonly type = CounterIncrement.name;
  reduce(state) {
    return state + 1;
  }
}

export class CounterDecrement implements Action {
  readonly type = CounterDecrement.name;
  reduce(state) {
    return state - 1;
  }
}

export class CounterReset implements Action {
  readonly type = CounterReset.name;
  reduce(state) {
    return 0;
  }
}
