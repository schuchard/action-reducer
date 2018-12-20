import { Action } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface ActionReducer extends Action {
  reduce: (state: any) => any;
}

export function actionReducer(actionModule: object, initialState: any) {
  return (state = initialState, action: Action) => {
    for (const [actionType, actionClass] of Object.entries(actionModule)) {
      if (action.type === actionType) return new actionClass().reduce(state);
    }

    return state;
  };
}
