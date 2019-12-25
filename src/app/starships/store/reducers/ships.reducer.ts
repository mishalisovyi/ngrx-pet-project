import { Action, createReducer, on } from '@ngrx/store';
import * as ShipsActions from '../actions/ships.actions';
import { State, EditShipModel, CreateShipModel } from '../state.model';


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

export const handleDeleteShip = (state: State, payload: { id: number }) => {
  let allShipsCopy = [...state.allShips];
  allShipsCopy = allShipsCopy.filter(item => item.id !== payload.id);

  return {
    ...state,
    allShips: allShipsCopy
  };
};

export const handleEditShip = (state: State, payload: EditShipModel) => {
  const allShipsCopy = JSON.parse(JSON.stringify(state.allShips));
  const index = allShipsCopy.findIndex(item => item.id === payload.id);
  allShipsCopy[index].name = payload.name;
  allShipsCopy[index].model = payload.model;

  return {
    ...state,
    allShips: allShipsCopy
  };
};

export const handleCreateShip = (state: State, payload: CreateShipModel) => {
  const newShip = {
    id: state.allShips.length,
    name: payload.name,
    model: payload.model
  };
  return {
    ...state,
    allShips: [...state.allShips, newShip]
  };
};

const shipsReducer = createReducer(
  initialState,

  on(ShipsActions.loadShips, state => state),
  on(ShipsActions.setShips, handleSetShips),
  on(ShipsActions.deleteShip, handleDeleteShip),
  on(ShipsActions.editShip, handleEditShip),
  on(ShipsActions.createShip, handleCreateShip)
);

export function reducer(state: State | undefined, action: Action) {
  return shipsReducer(state, action);
}
