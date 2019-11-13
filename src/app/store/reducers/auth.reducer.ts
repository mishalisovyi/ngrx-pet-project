import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  userName?: string;
  friendlyName?: string;
}

export const initialState: State = {
  userName: null,
  friendlyName: null
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.setAuths, (state, { userName, friendlyName }) => ({ ...state, userName, friendlyName }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}

export const getUserName = (state: State) => state.userName;
export const getFriendlyName = (state: State) => state.friendlyName;
