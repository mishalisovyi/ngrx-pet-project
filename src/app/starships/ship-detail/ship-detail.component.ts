import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State, StarShip } from 'src/app/starships/store/state.model';
import * as fromStore from 'src/app/starships/store/index';

@Component({
  selector: 'app-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.css']
})
export class ShipDetailComponent implements OnInit {
  starShip$: Observable<StarShip>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.starShip$ = this.store.select(fromStore.getCurrentShip);
  }
}
