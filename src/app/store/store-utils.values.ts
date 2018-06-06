// npm
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
// values
import { environment } from '@env/environment';
// store
import * as auth from './auth/auth.reducer';

export interface IState {
  auth: auth.IAuthState;
}

export const reducers: ActionReducerMap<IState> = {
  auth: auth.reducer
};

/** For debug purpose */
export function logger(reducer: ActionReducer<IState>): ActionReducer<IState> {
  return (state: IState, action: any): IState => {
    console.groupCollapsed(action.type);
    const nextState = reducer(state, action);
    console.log(
      `%c previous state`,
      `color: #9E9E9E; font-weight: bold`,
      state
    );
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(
      `%c next state`,
      `color: #4CAF50; font-weight: bold`,
      nextState
    );
    console.groupEnd();
    return nextState;
  };
}

export const metaReducers: Array<MetaReducer<IState>> = !environment.production
  ? [logger]
  : [];
