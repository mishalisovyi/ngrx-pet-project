import { createAction, props } from '@ngrx/store';
import { CreateShipModel, EditShipModel } from 'src/app/starships/store/state.model';

export const loadShips = createAction('[Ships] Load Ships');
export const setShips = createAction('[Ships] Set Ships', data => ({ data }));
export const deleteShip = createAction('[Ships] Delete Ship', props<{ id: number }>());
export const editShip = createAction('[Ships] Edit Ship', props<EditShipModel>());
export const createShip = createAction('[Ships] Create Ship', props<CreateShipModel>());
