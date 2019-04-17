import { Action } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface ActionReducer extends Action {
  reduce: (state: any) => any;
}

interface ActionPayload extends Action {
  payload: any;
}

export function actionReducer(actionModule: object, initialState: any) {
  return (state = initialState, action: ActionPayload) => {
    for (const [actionClassName, actionClass] of Object.entries(actionModule)) {
      checkActionTypeMisMatch(action, actionClassName, actionClass);

      if (action.type === actionClassName) return new actionClass(action.payload).reduce(state);
    }

    return state;
  };
}

function checkActionTypeMisMatch(
  dispatchedAction: Action,
  actionClassName: string,
  actionClass: any
) {
  if (environment.production) return;
  const dispatchedActionConstructor = Object.getPrototypeOf(dispatchedAction).constructor;
  // check if class name differs from `type` field in class;
  if (
    // ignore initialization
    dispatchedActionConstructor.name !== 'Object' &&
    // dispatched actions rely on the `type` prop, check against the dispatched actions class name
    dispatchedAction.type !== dispatchedActionConstructor.name &&
    // catch the incorrect action being called
    dispatchedAction.type === actionClassName
  ) {
    console.warn(
      `ActionReducer "type" mismatch\n` +
        `> ${dispatchedActionConstructor.name} was dispatched but\n` +
        `> ${new actionClass().constructor.name} ActionReducer class was called`
    );
  }
}
