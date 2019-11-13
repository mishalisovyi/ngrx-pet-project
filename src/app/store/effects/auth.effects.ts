import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';

import * as AuthActions from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }

  @Effect()
  loadAuth$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loadAuths),
    switchMap(() => this.http.get<any>('https://swapi.co/api/people/1/')
      .pipe(map((person) => {
        const name: string = person.name;
        return AuthActions.setAuths({
          userName: name.replace(' ', ''),
          friendlyName: name
        });
      }))
    )
  ));
}
