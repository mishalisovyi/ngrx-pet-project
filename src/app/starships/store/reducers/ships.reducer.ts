import { Action, createReducer, on } from '@ngrx/store';
import * as ShipsActions from '../actions/ships.actions';
import { State } from '../state.model';


export const shipsFeatureKey = 'ships';

export const initialState: State = {
  allShips: []
};

export const getAllShips = (state: State) => state.allShips;

export const handleSetShips = (state: State, payload: { data: any }) => {
  return {
    ...state,
    allShips: Object.values(payload.data)
  };
};

const shipsReducer = createReducer(
  initialState,

  on(ShipsActions.loadShips, state => state),
  on(ShipsActions.setShips, handleSetShips)
);

export function reducer(state: State | undefined, action: Action) {
  return shipsReducer(state, action);
}
