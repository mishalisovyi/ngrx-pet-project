import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromShips from '../reducers/ships.reducer';
import { State } from '../state.model';

const selectShipsState = createFeatureSelector<State>(fromShips.shipsFeatureKey);
export const getAllShips = createSelector(selectShipsState, fromShips.getAllShips);
