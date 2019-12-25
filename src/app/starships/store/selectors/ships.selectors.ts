import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromShips from '../reducers/ships.reducer';
import * as fromRoot from 'src/app/store/reducers/index';
import { State } from '../state.model';

const selectShipsState = createFeatureSelector<State>(fromShips.shipsFeatureKey);

export const getAllShips = createSelector(selectShipsState, fromShips.getAllShips);

export const getCurrentShip = createSelector(getAllShips, fromRoot.getRouterInfo, (ships, routerInfo) => {
  if (ships && ships.length > 0 && routerInfo) {
    const id = +routerInfo.params.shipId;
    if (id >= 0) {
      return ships.find(s => s.id === id);
    }
  }
  return null;
});

export const getShipById = createSelector(getAllShips, (ships, props) => {
  const ship = ships.find(item => item.id === props.shipId);
  console.log(ship);
  return ship ? ship : null;
});
