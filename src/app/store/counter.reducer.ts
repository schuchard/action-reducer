import { Action } from '@ngrx/store';
// import { ActionTypes } from './counter.actions';
import * as CounterStore from './counter.actions';
export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
  for (const [actionType, actionClass] of Object.entries(CounterStore)) {
    if (action.type === actionType) return new actionClass().reduce(state);
  }

  return state;
}

// function counterReducerSwitch(state = initialState, action: Action) {
//   switch (action.type) {
//     case ActionTypes.Increment:
//       return state + 1;

//     case ActionTypes.Decrement:
//       return state - 1;

//     case ActionTypes.Reset:
//       return 0;

//     default:
//       return state;
//   }
// }
