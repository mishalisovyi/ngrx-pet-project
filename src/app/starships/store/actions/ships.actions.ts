import { createAction, props } from '@ngrx/store';

export const loadShips = createAction('[Ships] Load Ships');
export const setShips = createAction('[Ships] Set Ships', data => ({ data }));
