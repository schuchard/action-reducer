import { ActionReducer } from 'src/lib/action-reducer';
import { Observable, of } from 'rxjs';

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

export class ArAdd5 implements ActionReducer {
  readonly type = ArAdd5.name;
  constructor(private payload: number) {}
  reduce(state) {
    return state + this.payload;
  }

  onLoadEffect(): Observable<number> {
    return of(55);
  }
}
