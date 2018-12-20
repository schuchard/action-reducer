import { ActionReducer } from 'src/lib/action-reducer';

export class Counter2Increment implements ActionReducer {
  readonly type = Counter2Increment.name;
  reduce(state) {
    return state + 1;
  }
}

export class Counter2Decrement implements ActionReducer {
  readonly type = Counter2Decrement.name;
  reduce(state) {
    return state - 1;
  }
}

export class Counter2Reset implements ActionReducer {
  readonly type = Counter2Reset.name;
  reduce(state) {
    return 0;
  }
}
