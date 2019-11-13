import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as ShipsActions from '../actions/ships.actions';



@Injectable()
export class ShipsEffects {

  loadShipss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ShipsActions.loadShips),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(() => ShipsActions.loadShips())
        )
      )
    );
  });



  constructor(private actions$: Actions) { }

}
