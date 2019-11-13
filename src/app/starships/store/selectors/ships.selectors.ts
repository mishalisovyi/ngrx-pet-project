import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromShips from '../reducers/ships.reducer';

export const selectShipsState = createFeatureSelector<fromShips.State>(
  fromShips.shipsFeatureKey
);
