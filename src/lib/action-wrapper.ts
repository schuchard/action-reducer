import { Action } from '@ngrx/store';

export default function actionWrapper(actionModule: object, initialState: any) {
  return (state = initialState, action: Action) => {
    for (const [actionType, actionClass] of Object.entries(actionModule)) {
      if (action.type === actionType) return new actionClass().reduce(state);
    }

    return state;
  };
}
