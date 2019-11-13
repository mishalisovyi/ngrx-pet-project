import { Action, createReducer, on } from '@ngrx/store';
import * as ShipsActions from '../actions/ships.actions';

export const shipsFeatureKey = 'ships';

export interface State {
  allShips: Array<any>;
}

export const initialState: State = {
  allShips: []
};

const shipsReducer = createReducer(
  initialState,

  on(ShipsActions.loadShips, state => state)
);

export function reducer(state: State | undefined, action: Action) {
  return shipsReducer(state, action);
}
