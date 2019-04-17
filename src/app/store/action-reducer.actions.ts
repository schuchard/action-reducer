import { ActionReducer } from 'src/app/store/action-reducer.lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

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

  @Effect()
  resetSuccess$: Observable<Action> =
    this.actions$ && this.actions$.pipe(map(() => new ArResetSuccess()));

  constructor(private actions$?: Actions) {}

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

export class ArResetSuccess implements ActionReducer {
  readonly type = ArResetSuccess.name;

  reduce(state) {
    return state + 101;
  }
}
