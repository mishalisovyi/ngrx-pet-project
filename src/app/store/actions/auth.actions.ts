import { createAction, props } from '@ngrx/store';

export const loadAuths = createAction('[Auth] Load Auths');
export const setAuths = createAction('[Auth] Set Auths', props<{ userName: string, friendlyName: string }>());
