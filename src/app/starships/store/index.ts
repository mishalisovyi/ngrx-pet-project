import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromShips from './reducers/ships.reducer';
import * as fromShipsSelectors from './selectors/ships.selectors';
import { State } from './state.model';

interface StarshipsState {
  allShips: State;
}

export type State = State;

export const reducers: ActionReducerMap<StarshipsState> = {
  allShips: fromShips.reducer
};

export const getAllShips = fromShipsSelectors.getAllShips;
