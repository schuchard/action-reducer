import { Action } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface ActionReducer extends Action {
  reduce: (state: any) => any;
}

export function actionReducer(actionModule: object, initialState: any) {
  return (state = initialState, action: Action) => {
    for (const [actionType, actionClass] of Object.entries(actionModule)) {
      checkNameMisMatch(action, actionClass);

      if (action.type === actionType) return new actionClass().reduce(state);
    }

    return state;
  };
}

function checkNameMisMatch(actionType: object, actionClass: any) {
  if (environment.production) return;
  const storeAction = Object.getPrototypeOf(actionType).constructor;
  // check if class name differs from `type` field in class;
  if (storeAction.name !== 'Object' && storeAction.name !== new actionClass().constructor.name) {
    console.warn(
      `name mismatch, expected ${storeAction.name}, got ${new actionClass().constructor.name}`
    );
  }
}
