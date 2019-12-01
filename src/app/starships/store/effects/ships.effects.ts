import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';

import * as ShipsActions from '../actions/ships.actions';


@Injectable()
export class ShipsEffects {
  loadShips$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShipsActions.loadShips),
      concatMap(() =>
        this.http.get('https://swapi.co/api/starships')
          .pipe(
            map((response: { results: any }) => ShipsActions.setShips(response.results))
          )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) { }

}
