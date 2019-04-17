import { ActionReducer } from 'src/app/action-reducer/action-reducer.lib';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

export interface ARState {
  count: number;
  loading: false;
}

export class ArIncrement implements ActionReducer {
  readonly type = this.constructor.name;

  reduce(state: ARState) {
    return { ...state, count: state.count + 1 };
  }
}

export class ArDecrement implements ActionReducer {
  readonly type = this.constructor.name;

  reduce(state: ARState) {
    return { ...state, count: state.count - 1 };
  }
}

@Injectable()
export class ArReset implements ActionReducer {
  readonly type = this.constructor.name;

  @Effect()
  resetSuccess$: Observable<Action> =
    this.actions$ &&
    this.actions$.pipe(
      ofType(new ArReset().type),
      debounceTime(1000),
      map(() => new ArResetSuccess(99))
    );

  constructor(private actions$?: Actions) {}

  reduce(state: ARState) {
    return { ...state, loading: true };
  }
}

export class ArAddBy implements ActionReducer {
  readonly type = this.constructor.name;

  constructor(private payload: number) {}

  reduce(state: ARState) {
    return { ...state, count: state.count + this.payload };
  }
}

export class ArResetSuccess implements ActionReducer {
  readonly type = this.constructor.name;

  constructor(private payload?: number) {}

  reduce(state: ARState) {
    return { ...state, count: this.payload, loading: false };
  }
}
