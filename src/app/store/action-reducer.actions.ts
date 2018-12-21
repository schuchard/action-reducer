import { ActionReducer } from 'src/lib/action-reducer';

export class ArIncrement implements ActionReducer {
  readonly type = ArIncrement.name;
  reduce(state) {
    return state + 1;
  }
}

export class ArDecrement implements ActionReducer {
  readonly type = ArDecrement.name;
  reduce(state) {
    return state - 1;
  }
}

export class ArReset implements ActionReducer {
  readonly type = ArReset.name;
  reduce(state) {
    return 0;
  }
}

export class ArAddBy implements ActionReducer {
  readonly type = ArAddBy.name;
  constructor(private payload: number) {}
  reduce(state) {
    return state + this.payload;
  }
}
