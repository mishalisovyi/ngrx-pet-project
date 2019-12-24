import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromRouter from 'src/app/store/serializers/router.serializer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';


export interface State {
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromRouter.routerFeatureKey]: RouterReducerState<fromRouter.RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromRouter.routerFeatureKey]: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectAuthState = createFeatureSelector<fromAuth.State>(fromAuth.authFeatureKey);
export const selectReducerState = createFeatureSelector<RouterReducerState<fromRouter.RouterStateUrl>>(fromRouter.routerFeatureKey);

export const getUserName = createSelector(selectAuthState, fromAuth.getUserName);
export const getFriendlyName = createSelector(selectAuthState, fromAuth.getFriendlyName);
export const getRouterInfo = createSelector(selectReducerState, state => state.state);
