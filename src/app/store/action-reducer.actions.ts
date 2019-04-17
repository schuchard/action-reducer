import { ActionReducer } from 'src/app/store/action-reducer.lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

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

@Injectable()
export class ArReset implements ActionReducer {
  readonly type = ArReset.name;

  @Effect()
  resetSuccess$: Observable<Action> =
    this.actions$ &&
    this.actions$.pipe(
      ofType(new ArReset().type),
      map(() => new ArResetSuccess(99))
    );

  constructor(private actions$?: Actions) {
    console.log('ArReset', actions$);
  }

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

  constructor(private payload?: number) {}

  reduce(state) {
    return this.payload || state;
  }
}
