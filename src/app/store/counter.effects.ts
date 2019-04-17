import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArResetSuccess, ArReset } from '../action-reducer/counter.ar';

@Injectable()
export class CounterEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  reset$: Observable<Action> = this.actions$.pipe(
    ofType(new ArReset().type),
    map(() => new ArResetSuccess(0))
  );

  constructor(private actions$: Actions) {}
}
