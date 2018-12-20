import { Action } from '@ngrx/store';

export class Counter2Increment implements Action {
  readonly type = Counter2Increment.name;
  reduce(state) {
    return state + 1;
  }
}

export class Counter2Decrement implements Action {
  readonly type = Counter2Decrement.name;
  reduce(state) {
    return state - 1;
  }
}

export class Counter2Reset implements Action {
  readonly type = Counter2Reset.name;
  reduce(state) {
    return 0;
  }
}
